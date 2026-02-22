import os
import httpx
import logging
from datetime import datetime
from typing import List

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient

# -------------------------
# Logging Setup
# -------------------------

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# -------------------------
# Load Environment Variables
# -------------------------

load_dotenv()

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
MONGO_URL = os.getenv("MONGO_URL")
OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"

if not OPENROUTER_API_KEY:
    logger.warning("⚠️ OPENROUTER_API_KEY not set")

if not MONGO_URL:
    logger.warning("⚠️ MONGO_URL not set")

# -------------------------
# FastAPI App
# -------------------------

app = FastAPI(title="Sujay Portfolio AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow frontend in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------------
# MongoDB Setup (SAFE VERSION)
# -------------------------

client = None
db = None

if MONGO_URL:
    try:
        client = AsyncIOMotorClient(MONGO_URL)
        db = client.portfolio_db
        logger.info("Mongo client initialized")
    except Exception as e:
        logger.error("Mongo initialization failed")
        logger.error(str(e))

@app.on_event("startup")
async def startup_db_check():
    if client:
        try:
            await client.admin.command("ping")
            logger.info("✅ MongoDB Connected Successfully")
        except Exception as e:
            logger.error("❌ MongoDB Connection Failed")
            logger.error(str(e))
            logger.warning("⚠️ Server will continue without DB")

# -------------------------
# Pydantic Models
# -------------------------

class Message(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    message: str
    history: List[Message] = Field(default_factory=list)

class ChatResponse(BaseModel):
    reply: str

# -------------------------
# Resume Formatter
# -------------------------

async def build_resume_text():
    if not db:
        return "Database not connected."

    resume = await db.resumes.find_one({})

    if not resume:
        return "Resume not found in database."

    text = f"""
Name: {resume.get("name")}

Contact:
Email: {resume.get("contact", {}).get("email")}
Phone: {resume.get("contact", {}).get("phone")}
GitHub: {resume.get("contact", {}).get("github")}
LinkedIn: {resume.get("contact", {}).get("linkedin")}

Education:
"""

    for edu in resume.get("education", []):
        text += f"- {edu.get('degree')} at {edu.get('institution')} ({edu.get('details', '')})\n"

    skills = resume.get("skills", {})
    text += "\nSkills:\n"
    text += f"Languages: {', '.join(skills.get('languages', []))}\n"
    text += f"Frameworks: {', '.join(skills.get('frameworks', []))}\n"
    text += f"Database: {', '.join(skills.get('database', []))}\n"
    text += f"Tools: {', '.join(skills.get('tools', []))}\n"
    text += f"Responsive Design: {', '.join(skills.get('responsive_design', []))}\n"

    text += "\nProjects:\n"
    for project in resume.get("projects", []):
        text += f"\n{project.get('name')}:\n"
        text += f"{project.get('description')}\n"
        text += f"Tech Stack: {', '.join(project.get('tech_stack', []))}\n"
        text += f"Live: {project.get('live_link')}\n"
        text += f"Source: {project.get('source_code')}\n"

    text += f"\nPassion:\n{resume.get('passion')}\n"

    return text.strip()

# -------------------------
# Chat Endpoint
# -------------------------

@app.post("/chat", response_model=ChatResponse)
async def chat_with_ai(request: ChatRequest):

    if not OPENROUTER_API_KEY:
        raise HTTPException(status_code=500, detail="OpenRouter API key missing")

    resume_text = await build_resume_text()

    system_prompt = f"""
You are an AI assistant for Sujay M Mundaragi's portfolio.

Answer ONLY using the resume below.
If information is not present, say:
"I’m sorry, I don’t have that information about Sujay's experience."

RESUME:
{resume_text}
"""

    messages = [{"role": "system", "content": system_prompt}]

    for msg in request.history:
        messages.append({"role": msg.role, "content": msg.content})

    messages.append({"role": "user", "content": request.message})

    payload = {
        "model": "meta-llama/llama-3-8b-instruct",
        "messages": messages,
        "temperature": 0.2,
    }

    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json"
    }

    try:
        async with httpx.AsyncClient(timeout=60.0) as client_http:
            response = await client_http.post(
                OPENROUTER_URL,
                headers=headers,
                json=payload
            )

        response.raise_for_status()
        data = response.json()
        reply = data["choices"][0]["message"]["content"]

        if db:
            await db.chats.insert_one({
                "user_message": request.message,
                "ai_reply": reply,
                "timestamp": datetime.utcnow()
            })

        return {"reply": reply}

    except Exception as e:
        logger.error(str(e))
        raise HTTPException(status_code=500, detail=str(e))

# -------------------------
# Health Check
# -------------------------

@app.get("/health")
async def health_check():
    return {"status": "ok"}