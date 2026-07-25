const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const aiRoutes = require("./routes/aiRoutes");

dotenv.config();

connectDB();

const app = express();

// CORS Configuration

app.use(
  cors({
    origin: [
  "http://localhost:5173",
  "https://student-management-system-frontend-vrinda4.vercel.app",
  "https://student-management-system-dq3fm0jpi-vrinda4.vercel.app",
  "https://student-management-system-git-main-vrinda4.vercel.app"
],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);


app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/ai", aiRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Student Management API is Running...");
});

// Protected profile route
const authMiddleware = require("./middleware/authMiddleware");

app.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome!",
    user: req.user,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});