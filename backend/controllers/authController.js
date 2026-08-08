const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Student = require("../models/Student");
const bcrypt = require("bcryptjs");


// ==========================================
// REGISTER USER
// ==========================================

const registerUser = async (req, res) => {

    try {

        const {
            name,
            email,
            password
        } = req.body;


        if (!name || !email || !password) {

            return res.status(400).json({
                success: false,
                message: "Please fill all fields"
            });

        }


        const existingUser = await User.findOne({
            email
        });


        if (existingUser) {

            return res.status(400).json({
                success: false,
                message: "Email already registered"
            });

        }


        const hashedPassword = await bcrypt.hash(
            password,
            10
        );


        /*
         * New registered users are students by default.
         *
         * The Student document will be linked later
         * using the student's email.
         */

        const user = new User({

            name,

            email,

            password: hashedPassword,

            role: "student"

        });


        await user.save();


        res.status(201).json({

            success: true,

            message: "User Registered Successfully"

        });


    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


// ==========================================
// LOGIN USER
// ==========================================

const loginUser = async (req, res) => {

    try {

        const {
            email,
            password
        } = req.body;


        // --------------------------------------
        // FIND USER
        // --------------------------------------

        const user = await User.findOne({
            email
        });


        if (!user) {

            return res.status(401).json({

                success: false,

                message: "Invalid email or password"

            });

        }


        // --------------------------------------
        // CHECK PASSWORD
        // --------------------------------------

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );


        if (!isMatch) {

            return res.status(401).json({

                success: false,

                message: "Invalid email or password"

            });

        }


        // --------------------------------------
        // FIND LINKED STUDENT
        // --------------------------------------

        let studentId = user.student || null;


        /*
         * If this is a student account and the
         * account is not linked to a Student
         * document yet, try to find the Student
         * using the same email address.
         */

        if (
            user.role === "student" &&
            !studentId
        ) {

            const student = await Student.findOne({
                email: user.email
            });


            if (student) {

                studentId = student._id;

                user.student = student._id;

                await user.save();

            }

        }


        // --------------------------------------
        // STUDENT MUST HAVE A PROFILE
        // --------------------------------------

        if (
            user.role === "student" &&
            !studentId
        ) {

            return res.status(403).json({

                success: false,

                message:
                    "No student profile is linked to this account. Please contact the administrator."

            });

        }


        // --------------------------------------
        // CREATE JWT
        // --------------------------------------

        const token = jwt.sign(

            {

                id: user._id,

                role: user.role,

                student: studentId

            },

            process.env.JWT_SECRET,

            {

                expiresIn: "1d"

            }

        );


        // --------------------------------------
        // SEND RESPONSE
        // --------------------------------------

        res.status(200).json({

            success: true,

            message: "Login Successful",

            token,

            user: {

                id: user._id,

                name: user.name,

                email: user.email,

                role: user.role,

                student: studentId

            }

        });


    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


// ==========================================
// EXPORT
// ==========================================

module.exports = {

    registerUser,

    loginUser

};