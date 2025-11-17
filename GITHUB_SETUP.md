# How to Create a GitHub Repository and Push Your Code

## 📋 Step 1: Create a Repository on GitHub

1. Go to **[github.com](https://github.com)** and log in (or create an account)
2. Click the **"+"** icon in the top-right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `taskify` (or your preferred name)
   - **Description**: "Full-stack task management application with React frontend and Express backend"
   - **Visibility**: Choose **Public** (free option)
   - **DO NOT** check "Initialize this repository with a README" (we already have files)
5. Click **"Create repository"**

## 🔗 Step 2: Connect Your Local Repository to GitHub

After creating the repo, GitHub will show you commands. Copy the **HTTPS URL** (looks like: `https://github.com/YourUsername/taskify.git`)

Then run these commands in PowerShell (from `d:\Dev\Taskify`):

```powershell
cd d:\Dev\Taskify
git branch -M main
git remote add origin https://github.com/YourUsername/taskify.git
git push -u origin main
```

**Replace `YourUsername` with your actual GitHub username!**

## 🔑 Step 3: Authentication (First Time Push)

When you push, GitHub will ask for authentication:

### Option A: Use Personal Access Token (Recommended)
1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token"
3. Give it a name like "Taskify Deployment"
4. Select scopes: `repo` (full control of private repositories)
5. Click "Generate token" and **copy it** (you won't see it again!)
6. When Git asks for password, paste the token

### Option B: Use SSH (Advanced)
Follow GitHub's SSH setup guide: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

## ✅ Step 4: Verify Your Push

After pushing, go to your GitHub repository URL and verify all files are there.

## 🚀 Step 5: Connect to Vercel

Now that your code is on GitHub:

1. Go to **[vercel.com](https://vercel.com)** and sign in
2. Click "New Project"
3. Click "Import Git Repository"
4. Paste your GitHub repo URL or select it from the list
5. Follow the deployment steps from `DEPLOYMENT.md`

---

## 📝 Summary of Commands

```powershell
# Navigate to your project
cd d:\Dev\Taskify

# Check git status (see what files will be pushed)
git status

# View your remote URL
git remote -v

# Push changes to GitHub
git push

# See commit history
git log --oneline
```

## 🔄 Future Pushes

After the initial setup, just use:
```powershell
git add .
git commit -m "Your commit message here"
git push
```

---

**You're all set! Your code is now version controlled and ready to deploy! 🎉**
