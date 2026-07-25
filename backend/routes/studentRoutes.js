const express = require("express");

const router = express.Router();

const {
    addStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent
} = require("../controllers/studentController");

const authMiddleware = require("../middleware/authMiddleware");

// Create Student
router.post("/", authMiddleware, addStudent);

// Get All Students
router.get("/", authMiddleware, getStudents);

// Get Student By ID
router.get("/:id", authMiddleware, getStudentById);

// Update Student
router.put("/:id", authMiddleware, updateStudent);

// Delete Student
router.delete("/:id", authMiddleware, deleteStudent);
router.get("/:id", authMiddleware, getStudentById);

module.exports = router;