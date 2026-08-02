const roleMiddleware = require("../middleware/roleMiddleware");
const express = require("express");

const router = express.Router();

const {
    addStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent
} = require("../controllers/studentController");

const {
    authMiddleware,
    adminOnly
} = require("../middleware/authMiddleware");

// Only Admin can add student
router.post(
    "/",
    authMiddleware,
    roleMiddleware("admin"),
    addStudent
);

// Everyone can view students
router.get("/", authMiddleware, getStudents);

// Everyone can view single student
router.get("/:id", authMiddleware, getStudentById);

// Only Admin can edit
router.put(
    "/:id",
    authMiddleware,
    roleMiddleware("admin"),
    updateStudent
);

// Only Admin can delete
router.delete(
    "/:id",
    authMiddleware,
    roleMiddleware("admin"),
    deleteStudent
);


module.exports = router;