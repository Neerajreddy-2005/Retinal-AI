# Retinal AI

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Click%20Here-brightgreen)](https://retinal-ai.netlify.app/)

**Retinal AI** is a web application for automated retinal disease diagnosis using deep learning. The project features a React (Vite) frontend and a Flask backend with a TensorFlow Lite model. It is designed for easy deployment and use on any machine.

---

## 🚀 Live Demo
- **Frontend:** [https://retinal-ai.netlify.app/](https://retinal-ai.netlify.app/)
- **Backend:** Hosted on Render (see below for setup)

---

## 🗂️ Project Structure

```
Retinal-AI/
  ├── backend/
  │   ├── app.py                # Flask backend API
  │   ├── model.tflite          # TensorFlow Lite model
  │   ├── requirements.txt      # Backend dependencies
  │   └── venv/                 # (optional) Python virtual environment
  ├── frontend/
  │   ├── src/                  # React source code
  │   ├── public/               # Static assets
  │   ├── package.json          # Frontend dependencies
  │   ├── vite.config.ts        # Vite config
  │   └── ...                   # Other config and build files
  └── README.md                 # Project documentation
```

---

## 🛠️ How the Project Works

1. **User uploads a retinal image via the Diagnosis page (frontend).**
2. **Frontend sends the image to the backend `/predict` endpoint.**
3. **Backend processes the image using a TensorFlow Lite model and returns a diagnosis.**
4. **Frontend displays the result, confidence, and recommendations.**

---

## 🖥️ Local Development & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Neerajreddy-2005/Retinal-AI.git
cd Retinal-AI
```

### 2. Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```
- **Run the backend:**
```bash
python app.py
```
- The backend will start on `http://localhost:5000` by default.

### 3. Frontend Setup
```bash
cd ../frontend
npm install  # or bun install
```
- **Create a `.env` file in `frontend/` with:**
```
VITE_BACKEND_URL=http://localhost:5000
```
- **Run the frontend:**
```bash
npm run dev  # or bun run dev
```
- The frontend will start on `http://localhost:5173` by default.

---

## 🌐 Deployment

### Backend (Render)
- Deploy the `backend/` folder as a web service on [Render](https://render.com/).
- Set the start command to:
  ```
  gunicorn app:app --bind 0.0.0.0:$PORT
  ```
- Add `gunicorn` to `requirements.txt` if not present.
- The backend will be available at a public URL (e.g., `https://retinal.render.com`).

### Frontend (Netlify)
- Deploy the `frontend/` folder on [Netlify](https://www.netlify.com/).
- **Build command:** `npm run build`
- **Publish directory:** `frontend/dist`
- **Environment variable:**
  - `VITE_BACKEND_URL=https://retinal-ai.onrender.com`
- The live frontend will be available at [https://retinal-ai.netlify.app/](https://retinal-ai.netlify.app/).

---

## ⚙️ Environment Variables

- **Frontend:**
  - `VITE_BACKEND_URL` — URL of the backend API (e.g., `http://localhost:5000` for local, or your Render URL for production)
- **Backend:**
  - `PORT` — (Set automatically by Render)

---

## 📄 License
This project is licensed under the MIT License. 