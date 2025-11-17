# Taskify - Full Stack Deployment Guide

This guide will help you deploy the Taskify application on Vercel.

## 📋 Prerequisites

- GitHub account (free)
- Vercel account (free) - sign up at [vercel.com](https://vercel.com)
- MongoDB instance (free at [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas))
- Your project pushed to GitHub

## 🚀 Quick Deployment Steps

### Step 1: Prepare Your GitHub Repository

```bash
cd d:\Dev\Taskify
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### Step 2: Deploy the Backend

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"New Project"**
3. Import your GitHub repository (taskify-backend or your repo name)
4. **Select Root Directory**: Choose `backend` folder
5. **Framework Preset**: Node.js
6. **Environment Variables** - Add these:
   - `MONGODB_URI`: Your MongoDB connection string (e.g., `mongodb+srv://username:password@cluster.mongodb.net/taskifydb`)
   - `JWT_SECRET`: A secure random string (generate with: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`)
   - `PORT`: `5000`
7. Click **"Deploy"**
8. **Save the deployed URL** (e.g., `https://taskify-backend.vercel.app`)

### Step 3: Update Frontend Environment

1. Open `.env.production` in the frontend folder
2. Replace `https://your-backend-url.vercel.app` with your actual backend URL from Step 2
3. Commit and push:
   ```bash
   git add frontend/.env.production
   git commit -m "Update backend URL for production"
   git push origin main
   ```

### Step 4: Deploy the Frontend

1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Import the same GitHub repository
4. **Select Root Directory**: Choose `frontend` folder
5. **Framework Preset**: Vite
6. **Build Command**: `npm run build` (should auto-detect)
7. **Output Directory**: `dist` (should auto-detect)
8. **Environment Variables** - Add:
   - `VITE_API_URL`: Your backend Vercel URL from Step 2
9. Click **"Deploy"**
10. **Save the frontend URL** (e.g., `https://taskify-frontend.vercel.app`)

## 🔧 Environment Variables Reference

### Backend (.env)
```
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/taskifydb
JWT_SECRET=your_secure_random_secret_key
PORT=5000
```

### Frontend (.env.production)
```
VITE_API_URL=https://your-backend-vercel-url.vercel.app
```

### Frontend (.env.local for local development)
```
VITE_API_URL=http://localhost:5000
```

## 🗄️ MongoDB Setup

1. Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster
4. Create a database user with username and password
5. Get the connection string (it will look like: `mongodb+srv://user:password@cluster.mongodb.net/dbname`)
6. Use this as your `MONGODB_URI` in Vercel backend environment variables

## ✅ Testing After Deployment

1. Visit your frontend URL: `https://taskify-frontend.vercel.app`
2. Try signing up with a new account
3. Try creating a task
4. Verify the task appears in the dashboard

## 🚨 Common Issues & Fixes

### Issue: "Cannot POST /api/auth/login"
**Solution**: Ensure `VITE_API_URL` in frontend `.env.production` is set to your actual backend URL (without trailing slash)

### Issue: "CORS errors"
**Solution**: Backend already has CORS enabled. Ensure the frontend is calling the correct backend URL.

### Issue: "MongoDB connection failed"
**Solution**: 
- Check your `MONGODB_URI` is correct
- Ensure IP is whitelisted in MongoDB Atlas (allow all: 0.0.0.0/0)
- Verify database user credentials

### Issue: Deployment fails with "Cannot find module"
**Solution**: 
- Run `npm install` locally and commit `package-lock.json`
- Ensure all dependencies are in `package.json` (not just devDependencies)

## 📝 Local Development

### Start Backend
```bash
cd backend
npm install
npm run dev
```
Backend runs on `http://localhost:5000`

### Start Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on `http://localhost:5173` (or shown in terminal)

## 🔐 Security Notes

- Never commit `.env` files to GitHub
- Use strong, random JWT secrets
- Keep MongoDB credentials safe
- Regularly rotate passwords and secrets

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [MongoDB Atlas Tutorial](https://docs.atlas.mongodb.com/getting-started/)
- [Express.js Guide](https://expressjs.com/)
- [React Router Documentation](https://reactrouter.com/)

## ✨ Next Steps

- Set up custom domain (optional in Vercel settings)
- Enable HTTPS (automatic with Vercel)
- Monitor deployments in Vercel dashboard
- Set up automatic deployments (Vercel auto-deploys on git push)

---

**Happy deploying! 🎉**
