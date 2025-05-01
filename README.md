# Project Name

A full-stack application with a React/TypeScript frontend and Python backend, featuring machine learning capabilities.

## Project Structure

```
project-root/
├── frontend/           # React/TypeScript frontend application
│   ├── src/           # Source code
│   ├── public/        # Static assets
│   └── ...           # Configuration files
└── backend/           # Python backend application
    ├── app.py        # Main application file
    ├── model.tflite  # TensorFlow Lite model
    └── requirements.txt
```

## Prerequisites

- Node.js (v16 or higher)
- Python 3.8 or higher
- npm or yarn package manager

## Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

The frontend will be available at `http://localhost:5173`

## Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Start the backend server:
   ```bash
   python app.py
   ```

The backend will be available at `http://localhost:5000`

## Technologies Used

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- ESLint

### Backend
- Python
- Flask
- TensorFlow Lite

## Development

- Frontend development server runs on port 5173
- Backend API server runs on port 5000
- Make sure both servers are running for full functionality

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 