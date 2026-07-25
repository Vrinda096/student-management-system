const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");   // ← Add this line here
const aiRoutes =require("./routes/aiRoutes");
dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/ai",aiRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);   // ← Add this line here

app.get("/", (req, res) => {
    res.send("Student Management API is Running...");
});

const authMiddleware = require("./middleware/authMiddleware");

app.get("/profile", authMiddleware, (req, res) => {
    res.json({
        message: "Welcome!",
        user: req.user
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});