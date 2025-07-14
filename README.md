# Retinal AI

**Retinal AI** is a web application for automated retinal disease diagnosis using deep learning. The project features a React (Vite) frontend and a Flask backend with a TensorFlow Lite model. It is designed for easy deployment and use on any machine.
Visit the Website [Click Here](https://retinal-ai.netlify.app)

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

## 📄 License
This project is licensed under the MIT License. 