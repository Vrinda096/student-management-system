const path = require("path");
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
      "https://student-management-system-production-60ad.up.railway.app",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

