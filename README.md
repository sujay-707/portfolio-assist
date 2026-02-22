🚀 AI Resume Portfolio Assistant

A full-stack AI-powered portfolio website built using React, FastAPI, MongoDB, and OpenRouter API.

This project includes a modern portfolio website with an AI assistant that answers questions strictly based on resume data stored in the database.

🌟 Features

🤖 AI Chat Assistant (Resume-based responses only)

💾 MongoDB database integration

💬 Chat history storage with timestamps

🎨 Modern and responsive UI

⚡ FastAPI backend

🔐 Secure API key management using environment variables

🌐 Live project links

📱 Fully responsive design

🛠 Tech Stack
Frontend

React

TypeScript

Vite

Tailwind CSS

Axios

Lucide Icons

Backend

FastAPI (Python)

HTTPX

Pydantic

Python Dotenv

Database

MongoDB (Chat storage + Resume data)

AI

OpenRouter API (Mistral / Llama models)

🏗 Project Architecture
User → React Frontend → FastAPI Backend → MongoDB
                                   ↓
                               OpenRouter API
How It Works

User sends a message in chat.

Backend reads resume data from MongoDB.

Message + resume context is sent to OpenRouter.

AI generates a response.

Response is saved in MongoDB.

Reply is displayed in the UI.

📂 Project Structure
AI-RESUME-PORTFOLIO/
│
├── backend/
│   ├── main.py
│   ├── resume.txt
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Chat.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── public/
│   └── package.json
│
└── README.md
⚙️ Setup Instructions
🔹 Backend Setup

Go to backend folder:

cd backend

Create virtual environment:

python -m venv venv

Activate environment:

Windows

venv\Scripts\activate

Mac/Linux

source venv/bin/activate

Install dependencies:

pip install -r requirements.txt

Create a .env file inside backend:

OPENROUTER_API_KEY=your_api_key_here
MONGODB_URI=your_mongodb_connection_string

Run backend:

uvicorn main:app --reload

Backend runs on:

http://localhost:8000
🔹 Frontend Setup

Go to frontend folder:

cd frontend

Install dependencies:

npm install

Run frontend:

npm run dev

Frontend runs on:

http://localhost:5173
🌍 Deployment
Frontend

Deploy on:

Vercel

Netlify

Set environment variable:

VITE_API_URL=https://your-backend-url.com
Backend

Deploy on:

Render

Railway

Set environment variables:

OPENROUTER_API_KEY=your_key
MONGODB_URI=your_mongodb_uri
💾 MongoDB Collections
Chat Collection

Stores:

user_message

ai_reply

timestamp

Resume Collection

Stores:

Education

Skills

Projects

Contact details

🎯 Purpose of the Project

This project demonstrates:

Full Stack Development

API Integration

Database Integration

AI Integration

Clean Architecture

Real-world Deployment Skills

👨‍💻 Author

Sujay M Mundaragi
MCA Student | Full Stack Developer

Passionate about building scalable web applications and clean, user-friendly interfaces.
