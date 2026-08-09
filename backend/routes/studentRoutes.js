// const express = require("express");

// const router = express.Router();

// const {
//     addStudent,
//     getStudents,
//     getStudentById,
//     getMyProfile,
//     // getMyStudentProfile,
//     updateStudent,
//     deleteStudent
// } = require("../controllers/studentController");

// const { authMiddleware } = require("../middleware/authMiddleware");


// // ================================
// // ADMIN / GENERAL ROUTES
// // ================================

// router.post(
//     "/",
//     authMiddleware,
//     addStudent
// );


// // Get all students
// router.get(
//     "/",
//     authMiddleware,
//     getStudents
// );


// // ================================
// // STUDENT OWN PROFILE
// // ================================

// router.get("/me", authMiddleware, getMyStudent);



// router.get(
//     "/me",
//     authMiddleware,
//     getMyStudentProfile
// );


// // ================================
// // STUDENT BY ID
// // ================================

// router.get("/me", authMiddleware, getMyProfile);

// router.get(
//     "/:id",
//     authMiddleware,
//     getStudentById
// );


// // Update
// router.put(
//     "/:id",
//     authMiddleware,
//     updateStudent
// );


// // Delete
// router.delete(
//     "/:id",
//     authMiddleware,
//     deleteStudent
// );


// module.exports = router;




const express = require("express");
const router = express.Router();

const {
    addStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
    getMyProfile
} = require("../controllers/studentController");

const { authMiddleware } = require("../middleware/authMiddleware");

router.post("/", authMiddleware, addStudent);

router.get("/", authMiddleware, getStudents);

router.get("/me", authMiddleware, getMyProfile);

router.post("/me", authMiddleware, createMyProfile);

router.get("/:id", authMiddleware, getStudentById);

router.put("/:id", authMiddleware, updateStudent);

router.delete("/:id", authMiddleware, deleteStudent);

module.exports = router;