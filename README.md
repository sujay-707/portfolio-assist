# AI-Powered Portfolio Assistant

A modern, professional portfolio built with React and FastAPI, featuring an AI Chat Assistant that answers questions specifically about the developer's resume using OpenRouter.

## 🚀 Key Features
- **AI Career Assistant**: Constraint-based AI (OpenRouter) that answers ONLY from resume data—zero hallucinations.
- **Modern UI/UX**: Built with React, TypeScript, and Tailwind CSS.
- **Interactive Projects**: Showcase of key engineering work with live links.
- **Responsive Design**: Optimized for mobile and desktop screens.
- **Clean Architecture**: Modular frontend and backend separation.

## 🛠 Tech Stack
- **Frontend**: React 18, Vite, TypeScript, Tailwind CSS, Lucide React, Axios.
- **Backend**: FastAPI (Python), HTTPX, Pydantic, Python-Dotenv.
- **AI**: OpenRouter API (Mistral/Llama models).

## 📂 Project Structure
```text
ai-resume-portfolio/
├── backend/            # FastAPI Server
│   ├── main.py         # Entry point & AI logic
│   ├── resume.txt      # Context for the AI
│   └── .env            # Environment variables
└── frontend/           # React Application
    ├── src/
    │   ├── components/ # Reusable UI pieces
    │   └── App.tsx     # Main layout
    └── tailwind.config.js
```

## ⚙️ Setup Instructions

### 1. Backend Setup
1. Navigate to `backend/`:
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # atau .\venv\Scripts\activate di Windows
   pip install -r requirements.txt
   ```
2. Create/Update `.env`:
   ```env
   OPENROUTER_API_KEY=your_key_here
   ```
3. Run the server:
   ```bash
   uvicorn main:app --reload
   ```

### 2. Frontend Setup
1. Navigate to `frontend/`:
   ```bash
   cd frontend
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```

## 🌐 Deployment Guidelines
- **Frontend**: Deploy to **Vercel** or **Netlify**. Ensure `VITE_API_URL` environment variable points to your live backend.
- **Backend**: Deploy to **Render** or **Railway**. Set the `OPENROUTER_API_KEY` in the service environment variables.

---
Built as a premium engineering assignment. 🚀
