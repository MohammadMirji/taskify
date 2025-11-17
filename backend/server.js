// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { connectDB } = require('./config/db'); // Import connectDB from the exported object
const authRoutes = require('./src/routes/authRoutes');
const taskRoutes = require('./src/routes/tasks.routes');

const app = express();

// --- Middleware ---
app.use(helmet()); // Security headers

// ✅ CORS Configuration - Allow frontend to access backend
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://taskify-ynwo.vercel.app',
    process.env.FRONTEND_URL || 'https://taskify-ynwo.vercel.app'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));   // Enable CORS with options
app.use(express.json()); // ✅ Parse JSON request bodies

// --- Routes ---
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// --- Global Error Handler ---
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Server Error',
  });
});

// --- Connect to DB and start server ---
const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`🚀 Server running on port ${PORT} & connected to MongoDB`)
    );
  })
  .catch((err) => {
    console.error('DB connection error:', err);
    process.exit(1);
  });
