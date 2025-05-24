# 📝 Todo Summary Assistant

A full-stack app to manage to-do tasks, generate AI summaries with Cohere, and send them to Slack.

## 🚀 Features

- ✅ Add / view / delete todos
- 🤖 Summarize todos using Cohere API
- 📤 Send summary to a Slack channel

## 🛠️ Tech Stack

- **Frontend**: React (Vite)
- **Backend**: Node.js + Express
- **Database**: MongoDB Atlas
- **AI**: Cohere API
- **Slack**: Incoming Webhook

## 📦 Setup Instructions

### 🔧 Backend

```bash
cd backend
npm install
cp .env
# Fill in MongoDB, Cohere, Slack keys
node server.js

cd frontend
npm install
cp .env.example .env
# Set VITE_API_URL=http://localhost:5000
npm run dev
