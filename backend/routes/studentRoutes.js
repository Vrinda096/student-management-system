const express = require("express");

const router = express.Router();

const {
    addStudent,
    getStudents,
    getStudentById,
    getMyProfile,
    // getMyStudentProfile,
    updateStudent,
    deleteStudent
} = require("../controllers/studentController");

const { authMiddleware } = require("../middleware/authMiddleware");


// ================================
// ADMIN / GENERAL ROUTES
// ================================

router.post(
    "/",
    authMiddleware,
    addStudent
);


// Get all students
router.get(
    "/",
    authMiddleware,
    getStudents
);


// ================================
// STUDENT OWN PROFILE
// ================================

router.get("/me", authMiddleware, getMyStudent);



router.get(
    "/me",
    authMiddleware,
    getMyStudentProfile
);


// ================================
// STUDENT BY ID
// ================================

router.get("/me", authMiddleware, getMyProfile);

router.get(
    "/:id",
    authMiddleware,
    getStudentById
);


// Update
router.put(
    "/:id",
    authMiddleware,
    updateStudent
);


// Delete
router.delete(
    "/:id",
    authMiddleware,
    deleteStudent
);


module.exports = router;