const Student = require("../models/Student");

// Add Student
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

        // Check required fields
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

        // Check duplicate email
        const emailExists = await Student.findOne({ email });

        if (emailExists) {
            return res.status(400).json({
                success: false,
                message: "Email already exists"
            });
        }

        // Check duplicate roll number
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
 

// Get All Students
const getStudents = async (req, res) => {

    try {

        const students = await Student.find();

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

// Get Student By ID
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

// Update Student
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
                message: "Student Not Found"
            });
        }

        res.status(200).json({
            message: "Student Updated Successfully",
            student
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Delete Student
const deleteStudent = async (req, res) => {

    try {

        const student = await Student.findByIdAndDelete(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: "Student Not Found"
            });
        }

        res.status(200).json({
            message: "Student Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
    exports.getStudentById = async (req, res) => {

    try {

        const student = await Student.findById(req.params.id);

        if (!student) {

            return res.status(404).json({
                message: "Student not found"
            });

        }

        res.json(student);

    }

    catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

};

module.exports = {
    addStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent
};