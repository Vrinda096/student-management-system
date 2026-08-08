const Student = require("../models/Student");


// =====================================================
// ADMIN: ADD STUDENT
// =====================================================

const addStudent = async (req, res) => {

    try {

        const {
            name,
            rollNo,
            course,
            semester,
            email,
            phone,
            cgpa,
            result,
            gender,
            address
        } = req.body;


        if (
            !name ||
            !rollNo ||
            !course ||
            !semester ||
            !email ||
            !phone ||
            cgpa === undefined ||
            !result ||
            !gender ||
            !address
        ) {

            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });

        }


        const emailExists = await Student.findOne({ email });

        if (emailExists) {

            return res.status(400).json({
                success: false,
                message: "Email already exists"
            });

        }


        const rollExists = await Student.findOne({ rollNo });

        if (rollExists) {

            return res.status(400).json({
                success: false,
                message: "Roll Number already exists"
            });

        }


        const student = await Student.create({

            name,
            rollNo,
            course,
            semester,
            email,
            phone,
            cgpa,
            result,
            gender,
            address

        });


        res.status(201).json({

            success: true,

            message: "Student Added Successfully",

            student

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


// =====================================================
// ADMIN: GET ALL STUDENTS
// =====================================================

const getStudents = async (req, res) => {

    try {

        // const students = await Student.find();
        const students = await Student.find().sort({ createdAt: -1 });

        res.status(200).json({

            success: true,

            count: students.length,

            students

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


// =====================================================
// ADMIN: GET STUDENT BY ID
// =====================================================

const getStudentById = async (req, res) => {

    try {

        const student = await Student.findById(req.params.id);

        if (!student) {

            return res.status(404).json({

                success: false,

                message: "Student Not Found"

            });

        }


        res.status(200).json({

            success: true,

            student

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


// =====================================================
// STUDENT: GET OWN PROFILE
// =====================================================

const getMyProfile = async (req, res) => {

    try {

        if (!req.user.student) {

            return res.status(404).json({

                success: false,

                message: "No student profile linked to this account"

            });

        }


        const student = await Student.findById(
            req.user.student
        );


        if (!student) {

            return res.status(404).json({

                success: false,

                message: "Student profile not found"

            });

        }


        res.status(200).json({

            success: true,

            student

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


// =====================================================
// ADMIN: UPDATE ANY STUDENT
// =====================================================

const updateStudent = async (req, res) => {

    try {

        const student = await Student.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true,
                runValidators: true
            }

        );


        if (!student) {

            return res.status(404).json({

                success: false,

                message: "Student Not Found"

            });

        }


        res.status(200).json({

            success: true,

            message: "Student Updated Successfully",

            student

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


// =====================================================
// STUDENT: UPDATE OWN PROFILE
// =====================================================

const updateMyProfile = async (req, res) => {

    try {

        if (!req.user.student) {

            return res.status(404).json({

                success: false,

                message: "No student profile linked to this account"

            });

        }


        const student = await Student.findByIdAndUpdate(

            req.user.student,

            req.body,

            {
                new: true,
                runValidators: true
            }

        );


        if (!student) {

            return res.status(404).json({

                success: false,

                message: "Student profile not found"

            });

        }


        res.status(200).json({

            success: true,

            message: "Profile Updated Successfully",

            student

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


// =====================================================
// ADMIN: DELETE STUDENT
// =====================================================

const deleteStudent = async (req, res) => {

    try {

        const student = await Student.findByIdAndDelete(
            req.params.id
        );


        if (!student) {

            return res.status(404).json({

                success: false,

                message: "Student Not Found"

            });

        }


        res.status(200).json({

            success: true,

            message: "Student Deleted Successfully"

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// Get logged-in student's own profile
const getMyStudentProfile = async (req, res) => {

    try {

        // Only students can use this endpoint
        if (req.user.role !== "student") {

            return res.status(403).json({
                success: false,
                message: "Only students can access this profile"
            });

        }

        if (!req.user.student) {

            return res.status(404).json({
                success: false,
                message: "No student profile linked to this account"
            });

        }

        const student = await Student.findById(req.user.student);

        if (!student) {

            return res.status(404).json({
                success: false,
                message: "Student profile not found"
            });

        }

        res.status(200).json({
            success: true,
            student
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Get Logged-in Student Profile
const getMyStudent = async (req, res) => {

    try {

        // Student ID is stored inside JWT
        const studentId = req.user.student;

        if (!studentId) {

            return res.status(404).json({
                success: false,
                message: "No student profile linked to this account"
            });

        }

        const student = await Student.findById(studentId);

        if (!student) {

            return res.status(404).json({
                success: false,
                message: "Student profile not found"
            });

        }

        res.status(200).json({
            success: true,
            student
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};
// Get logged-in student's own profile
const getMyProfile = async (req, res) => {

    try {

        if (req.user.role !== "student") {

            return res.status(403).json({
                success: false,
                message: "Access denied"
            });

        }

        if (!req.user.student) {

            return res.status(404).json({
                success: false,
                message: "Student profile not linked"
            });

        }

        const student = await Student.findById(req.user.student);

        if (!student) {

            return res.status(404).json({
                success: false,
                message: "Student profile not found"
            });

        }

        res.status(200).json({
            success: true,
            student
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


module.exports = {

    addStudent,
    getStudents,
    getStudentById,
    getMyStudent,
    updateStudent,
    deleteStudent,
    getMyProfile
    // getMyStudentProfile,
    // updateMyProfile
};