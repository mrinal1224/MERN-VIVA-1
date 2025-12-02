# Instructor Guide - Bug List

This document contains all the intentional bugs in the application for reference.

## Backend Bugs

### 1. Missing CORS Configuration
**Location:** `backend/server.js`
**Issue:** CORS middleware is not installed or configured
**Fix:** 
- Install: `npm install cors`
- Add: `const cors = require('cors');`
- Add: `app.use(cors());` before routes

### 2. Wrong API Route Path
**Location:** `frontend/src/App.js`
**Issue:** Line 18 - API endpoint uses `/task` instead of `/tasks` (singular vs plural)
**Fix:** Change `${API_URL}/task` to `${API_URL}/tasks`

### 3. Wrong POST Endpoint
**Location:** `frontend/src/App.js`
**Issue:** Line 50 - POST request uses `/task` instead of `/tasks`
**Fix:** Change `${API_URL}/task` to `${API_URL}/tasks`

### 4. Missing Error Handling in useEffect
**Location:** `frontend/src/App.js`
**Issue:** Line 15 - useEffect dependency array might be missing (actually it's correct, but students might think it needs dependencies)
**Note:** This one is actually correct, but can be a learning point

### 5. Missing Validation in Backend Routes
**Location:** `backend/routes/tasks.js`
**Issue:** POST route doesn't validate required fields before creating task
**Fix:** Add validation check for `req.body.title`

### 6. Missing ObjectId Validation
**Location:** `backend/routes/tasks.js`
**Issue:** GET, PUT, DELETE routes don't validate if the ID is a valid MongoDB ObjectId
**Fix:** Add mongoose.Types.ObjectId.isValid() check

## Frontend Bugs

### 7. Wrong API Base URL (Optional - can be left as is)
**Location:** `frontend/src/App.js`
**Issue:** Line 7 - API_URL might need adjustment based on deployment
**Note:** This is actually correct for local development

### 8. Missing Error State Reset
**Location:** `frontend/src/App.js`
**Issue:** Error state is not cleared when operations succeed
**Fix:** Add `setError('')` in success cases

## Summary of Bugs to Fix

1. ✅ Install and configure CORS in backend
2. ✅ Fix API endpoint from `/task` to `/tasks` in fetchTasks (line 18)
3. ✅ Fix API endpoint from `/task` to `/tasks` in handleSubmit POST (line 50)
4. ✅ Add validation in backend POST route
5. ✅ Add ObjectId validation in backend routes
6. ✅ Clear error state on successful operations

## Testing Checklist

After students fix bugs, verify:
- [ ] Backend starts without errors
- [ ] Frontend connects to backend (no CORS errors)
- [ ] Can fetch all tasks
- [ ] Can create new task
- [ ] Can edit existing task
- [ ] Can delete task
- [ ] Can toggle task completion
- [ ] Error messages display correctly
- [ ] No console errors in browser
- [ ] No errors in backend terminal

## Expected Behavior After Fixes

1. Backend runs on port 5000
2. Frontend runs on port 3000
3. Frontend can make API calls to backend
4. All CRUD operations work correctly
5. Tasks persist in MongoDB
6. UI updates correctly after operations

