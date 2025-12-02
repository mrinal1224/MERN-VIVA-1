# Quick Setup Guide

## Step-by-Step Setup

### 1. Install Backend Dependencies
```bash
cd backend
npm install
```

### 2. Setup Backend Environment
Create a `.env` file in the `backend` directory:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/tasksdb
```

**Important:** Make sure MongoDB is running on your system before starting the backend.

### 3. Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

### 4. Start the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

### 5. Access the Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Troubleshooting

### MongoDB Not Running
If you see MongoDB connection errors:
- **Windows:** Start MongoDB service or run `mongod`
- **Mac/Linux:** Run `mongod` in a terminal or start MongoDB service
- **Alternative:** Use MongoDB Atlas (cloud) and update the connection string in `.env`

### Port Already in Use
If port 5000 or 3000 is already in use:
- Change the port in `backend/.env` (for backend)
- Create `frontend/.env` with `PORT=3001` (for frontend)

### CORS Errors
You'll see CORS errors in the browser console - this is one of the bugs to fix!

### 404 Errors
You'll see 404 errors for API calls - this is another bug to fix!

## What to Expect

When you first run the application, you should see:
- ❌ CORS errors in browser console
- ❌ 404 errors for API endpoints
- ❌ Network request failures

These are the bugs you need to fix! Check the README.md for hints.

