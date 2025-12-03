# 🚀 Taskify - Local Development Setup

## 📋 Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local or cloud)

---

## 🔧 Installation Steps

### Step 1: Clone/Setup Repository

```bash
cd d:\Dev\Taskify
```

### Step 2: Backend Setup

```bash
cd backend
npm install
```

Create `.env` file in the `backend` folder:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/taskifydb
JWT_SECRET=your_secret_key_here
PORT=5000
```

**Or for local MongoDB:**

```env
MONGODB_URI=mongodb://localhost:27017/taskifydb
JWT_SECRET=your_secret_key_here
PORT=5000
```

Start the backend:

```bash
npm run dev
```

Backend will run on: `http://localhost:5000`

### Step 3: Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on: `http://localhost:5173`

---

## ✅ Verify Everything Works

1. **Backend is running**: `http://localhost:5000` should show error (that's OK)
2. **Frontend is running**: `http://localhost:5173` should show the app
3. **Try to signup** - should create a user
4. **Try to login** - should work
5. **Create a task** - should work

---

## 📁 Project Structure

```
Taskify/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   └── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 🛠️ Available Commands

### Backend

```bash
npm run dev      # Run with nodemon (auto-reload)
npm start        # Run normally
```

### Frontend

```bash
npm run dev      # Development server with hot reload
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

---

## 🔌 API Endpoints

### Authentication

- `POST /api/auth/register` - Create new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile (requires token)

### Tasks

- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

---

## 🐛 Troubleshooting

### Backend Won't Connect to MongoDB

**Issue:** `MongoDB connection failed`

**Solution:**
- Check `MONGODB_URI` in `.env`
- Ensure MongoDB is running (if local)
- Check network access (if cloud)
- Verify username/password

### CORS Error in Frontend

**Issue:** `Access to XMLHttpRequest blocked by CORS`

**Solution:**
- Ensure backend is running on `http://localhost:5000`
- Check CORS configuration in `backend/server.js`
- Clear browser cache (Ctrl+Shift+R)

### Frontend Can't Find Backend

**Issue:** `Cannot fetch from localhost:5000`

**Solution:**
- Make sure backend is running: `npm run dev` in backend folder
- Check that frontend uses correct URL: `http://localhost:5000`
- Both should be running simultaneously

### Port Already in Use

**Issue:** `Port 5000/5173 already in use`

**Solution:**
- Find what's using the port
- Or change PORT in `.env` (backend) or `vite.config.js` (frontend)

---

## 💡 Development Tips

1. **Keep both terminals open** - One for backend, one for frontend
2. **Use nodemon** - Backend auto-reloads on file changes
3. **Hot reload** - Frontend auto-reloads on file changes
4. **Check Network tab** - Use browser DevTools to debug API calls
5. **Check Backend logs** - Terminal shows backend errors

---

## 🎓 Git Workflow

```bash
# Make changes
git add .
git commit -m "Your message"
git push origin main

# Pull changes
git pull origin main
```

---

## 🚀 Ready to Develop!

Everything is set up for local development. Start with:

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

Then open: `http://localhost:5173`

---

**Happy coding! 💻**
