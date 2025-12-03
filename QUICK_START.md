# 🚀 Quick Start - Taskify Local Development

## ⚡ 5 Minute Setup

### Step 1: Backend (.env file)

Create `backend/.env`:

```env
MONGODB_URI=mongodb://localhost:27017/taskifydb
JWT_SECRET=mysecretkey123
PORT=5000
```

### Step 2: Start Backend

```powershell
cd backend
npm install
npm run dev
```

**Wait for:** `🚀 Server running on port 5000 & connected to MongoDB`

### Step 3: Start Frontend (New Terminal)

```powershell
cd frontend
npm install
npm run dev
```

**Wait for:** URL appears (usually `http://localhost:5173`)

### Step 4: Open App

Go to: `http://localhost:5173`

### Step 5: Test

- ✅ Sign up
- ✅ Login
- ✅ Create task
- ✅ View tasks
- ✅ Delete task

---

## 📝 Notes

- **MongoDB**: Install locally or use MongoDB Atlas (change MONGODB_URI)
- **Keep both terminals open**: Backend + Frontend need to run together
- **Port conflicts?**: Change PORT in `.env` (backend) or `vite.config.js` (frontend)
- **Changes auto-reload**: No need to restart after code changes

---

**For detailed setup, see `LOCAL_SETUP.md`**
