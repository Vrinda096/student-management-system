const express = require("express");
const router = express.Router();

const { generateAI } = require("../controllers/aiController");
const { authMiddleware } = require("../middleware/authMiddleware");

router.post("/ask", authMiddleware, generateAI);

module.exports = router;