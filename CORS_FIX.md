# 🔧 CORS Error - How to Fix

## 🔴 The Error You're Getting

```
Access to XMLHttpRequest at 'https://taskify-backend.vercel.app/api/tasks' 
from origin 'https://taskify-ynwo.vercel.app' has been blocked by CORS policy
```

## 📖 What This Means

**CORS** = Cross-Origin Resource Sharing

Your **frontend** (running on `taskify-ynwo.vercel.app`) is trying to call your **backend** (running on `taskify-backend.vercel.app`), but the backend is rejecting it because:

- ❌ They're on different domains (different origins)
- ❌ Backend doesn't know the frontend is allowed
- ❌ Browser blocks cross-origin requests for security

## ✅ How We Fixed It

We updated `backend/server.js` to explicitly allow your frontend URL.

### What Changed:

**Before (too restrictive):**
```javascript
app.use(cors());   // Default CORS - might not work on different domains
```

**After (correctly configured):**
```javascript
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://taskify-ynwo.vercel.app',  // ← Your frontend URL
    process.env.FRONTEND_URL || 'https://taskify-ynwo.vercel.app'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
```

## 🚀 Steps to Deploy Fix

### Step 1: Commit Changes Locally

```powershell
cd d:\Dev\Taskify
git add backend/server.js backend/.env.example
git commit -m "Fix CORS issue - allow frontend to call backend"
git push
```

### Step 2: Add Environment Variable to Vercel Backend

1. Go to **[vercel.com](https://vercel.com)**
2. Open your **taskify-backend** project
3. Go to **Settings** → **Environment Variables**
4. Add new variable:
   - **Name**: `FRONTEND_URL`
   - **Value**: `https://taskify-ynwo.vercel.app` (your actual frontend URL)
5. Click **Save**
6. **Redeploy** the backend:
   - Go to **Deployments** tab
   - Click the 3-dot menu on latest deployment
   - Click **Redeploy**

### Step 3: Wait for Redeployment

Backend should redeploy within 1-2 minutes. You'll see:
- Status changes to "Building..."
- Then to "Ready" ✅

### Step 4: Test It

1. Go to your frontend: `https://taskify-ynwo.vercel.app`
2. Open **Browser Console** (F12 → Console tab)
3. Try logging in or creating a task
4. Check if errors are gone

## 🎯 CORS Configuration Breakdown

| Setting | Purpose |
|---------|---------|
| `origin` | List of domains allowed to call your backend |
| `credentials: true` | Allow cookies and auth headers |
| `methods` | HTTP methods allowed (GET, POST, etc.) |
| `allowedHeaders` | Headers frontend can send (Authorization, etc.) |

## ⚠️ Important Notes

1. **Update frontend URL if it changes**: The current URL is `https://taskify-ynwo.vercel.app`, but it might be different. Replace `taskify-ynwo` with your actual Vercel project name.

2. **For production, use environment variable**: Instead of hardcoding the frontend URL, we use `process.env.FRONTEND_URL`, which you can set in Vercel dashboard.

3. **Localhost URLs included**: The CORS also allows `localhost:3000` and `localhost:5173` for local development.

## 🐛 Still Getting CORS Errors?

### Check 1: Did backend redeploy?
- Go to Vercel → taskify-backend → Deployments
- Make sure latest deployment shows "Ready" ✅

### Check 2: Is environment variable set?
- Go to Vercel → taskify-backend → Settings → Environment Variables
- Make sure `FRONTEND_URL` is set to your frontend URL

### Check 3: Did you clear browser cache?
- Hard refresh: **Ctrl + Shift + R** (Windows) or **Cmd + Shift + R** (Mac)
- Or open in Incognito mode

### Check 4: Is frontend URL correct?
- Open your frontend in browser
- Copy the full URL from address bar
- Make sure it's added to the CORS `origin` array

## 📚 Additional Resources

- [CORS Explained](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [Express CORS Package](https://github.com/expressjs/cors)
- [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables)

---

**After these steps, your CORS error should be fixed! 🎉**
