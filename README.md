# 🚀 AI Resume Portfolio Assistant

A full-stack AI-powered portfolio website built using React, FastAPI, MongoDB, and OpenRouter API.

This project features a modern portfolio website integrated with an AI assistant that answers questions strictly based on resume data stored in the database.

---

## 🌟 Features

- 🤖 AI Chat Assistant (Resume-based responses only)
- 💾 MongoDB database integration
- 💬 Chat history storage with timestamps
- 🎨 Modern and responsive UI
- ⚡ FastAPI backend
- 🔐 Secure API key management using environment variables
- 🌐 Live project links
- 📱 Fully responsive design

---

## 🛠 Tech Stack

### 🔹 Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- Axios
- Lucide Icons

### 🔹 Backend
- FastAPI (Python)
- HTTPX
- Pydantic
- Python Dotenv

### 🔹 Database
- MongoDB (Chat storage + Resume data)

### 🔹 AI
- OpenRouter API (Mistral / Llama models)

---

## 🔄 How It Works

1. User sends a message in chat.
2. Backend reads resume data from MongoDB.
3. Message + resume context is sent to OpenRouter API.
4. AI generates a response.
5. Response is saved in MongoDB.
6. Reply is displayed in the UI.

---

## 📂 Project Structure

```
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
```

---

## ⚙️ Setup Instructions

### 🔹 Backend Setup

```bash
cd backend
```

```bash
python -m venv venv
```

#### Windows
```bash
venv\Scripts\activate
```

#### Mac/Linux
```bash
source venv/bin/activate
```

```bash
pip install -r requirements.txt
```

Create a `.env` file inside backend:

```
OPENROUTER_API_KEY=your_api_key_here
MONGODB_URI=your_mongodb_connection_string
```

Run backend:

```bash
uvicorn main:app --reload
```

Backend runs on:

```
http://localhost:8000
```

---

### 🔹 Frontend Setup

```bash
cd frontend
```

```bash
npm install
```

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🌍 Deployment

### 🔹 Frontend

Deploy on:
- Vercel
- Netlify

Set environment variable:

```
VITE_API_URL=https://your-backend-url.com
```

---

### 🔹 Backend

Deploy on:
- Render
- Railway

Set environment variables:

```
OPENROUTER_API_KEY=your_key
MONGODB_URI=your_mongodb_uri
```

---

## 💾 MongoDB Collections

### 🔹 Chat Collection
Stores:
- user_message
- ai_reply
- timestamp

### 🔹 Resume Collection
Stores:
- Education
- Skills
- Projects
- Contact details

---

## 🎯 Purpose of the Project

This project demonstrates:

- Full Stack Development
- API Integration
- Database Integration
- AI Integration
- Clean Architecture
- Real-world Deployment Skills

---

## 👨‍💻 Author

**Sujay M Mundaragi**  
MCA Student | Full Stack Developer  

Passionate about building scalable web applications and clean, user-friendly interfaces.
