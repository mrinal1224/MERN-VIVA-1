# MERN Stack Bug Fixing Exercise

This is a fullstack MERN (MongoDB, Express, React, Node.js) application with **intentional bugs** for students to identify and fix.

## Project Overview

A simple Task Manager application where users can:
- Create new tasks
- View all tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as complete/incomplete

## 🐛 Bugs to Fix

The application currently has several bugs that prevent it from working correctly. Students need to:

1. **Backend Bugs:**
   - CORS configuration missing
   - Incorrect API route paths
   - Missing error handling in some routes
   - Database connection issues
   - Missing middleware

2. **Frontend Bugs:**
   - Incorrect API endpoint URLs
   - Missing error handling
   - State management issues
   - Incorrect HTTP methods or request paths

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or MongoDB Atlas account)
- npm or yarn

## Setup Instructions

### 1. Clone/Download the Project

```bash
cd MERN-VIVA
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/tasksdb
```

**Note:** Make sure MongoDB is running on your system. If using MongoDB Atlas, update the connection string.

Start the backend server:
```bash
npm start
# or for development with auto-reload
npm run dev
```

The backend should run on `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm start
```

The frontend should run on `http://localhost:3000`

## Expected Behavior

Once all bugs are fixed, the application should:
- Display all tasks from the database
- Allow creating new tasks
- Allow editing existing tasks
- Allow deleting tasks
- Allow toggling task completion status
- Show proper error messages when something goes wrong
- Handle network errors gracefully

## Testing the Application

1. Start MongoDB (if running locally)
2. Start the backend server
3. Start the frontend application
4. Open browser to `http://localhost:3000`
5. Try to create, edit, delete, and toggle tasks
6. Check browser console and terminal for errors

## Common Issues to Look For

- CORS errors in browser console
- 404 errors for API endpoints
- Network errors
- Database connection errors
- Missing dependencies
- Incorrect import/export statements
- Missing async/await keywords
- Wrong state updates

## Hints

- Check the browser's Network tab to see what API calls are being made
- Check the browser console for JavaScript errors
- Check the terminal running the backend for server errors
- Verify all API endpoints match between frontend and backend
- Ensure CORS is properly configured
- Verify MongoDB connection string is correct

## Solution Notes

After fixing the bugs, the application should work seamlessly. All CRUD operations should function correctly, and there should be no console errors or network failures.

---

**Good luck fixing the bugs! 🐛🔧**

