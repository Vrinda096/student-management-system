// const Student = require("../models/Student");
// const askAI = require("../services/huggingfaceService");
// exports.generateAI = async (req, res) => {
//     try {

//         const { prompt } = req.body;

//         // Get all students from MongoDB
//         const students = await Student.find();
//         const question = prompt.toLowerCase();

//         // Count TOTAL students
// if (
//     question.includes("how many students") ||
//     question.includes("total students") ||
//     question.includes("number of students") ||
//     question === "how many students are there"
// ) {
//     const count = await Student.countDocuments();

//     return res.json({
//         success: true,
//         answer: `${count}`
//     });
// }

//         // Count B.Tech CSE students
// if (
//     question.includes("how many") &&
//     question.includes("cse")
// ) {

//     const count = await Student.countDocuments({
//         course: "B.Tech CSE"
//     });

//     return res.json({
//         success: true,
//         answer: `There are ${count} B.Tech CSE students.`
//     });
// }


// // Count B.Tech AI & ML students
// if (
//     question.includes("how many") &&
//     (question.includes("ai") || question.includes("ai & ml") || question.includes("artificial intelligence"))
// ) {

//     const count = await Student.countDocuments({
//         course: "B.Tech AI & ML"
//     });

//     return res.json({
//         success: true,
//         answer: `There are ${count} B.Tech AI & ML students.`
//     });
// }


// // Count B.Tech IT students
// if (
//     question.includes("how many") &&
//     question.includes("it")
// ) {

//     const count = await Student.countDocuments({
//         course: "B.Tech IT"
//     });

//     return res.json({
//         success: true,
//         answer: `There are ${count} B.Tech IT students.`
//     });
// }


// // Count B.Tech ECE students
// if (
//     question.includes("how many") &&
//     question.includes("ece")
// ) {

//     const count = await Student.countDocuments({
//         course: "B.Tech ECE"
//     });

//     return res.json({
//         success: true,
//         answer: `There are ${count} B.Tech ECE students.`
//     });
// }


// // Count B.Tech Mechanical students
// if (
//     question.includes("how many") &&
//     question.includes("mechanical")
// ) {

//     const count = await Student.countDocuments({
//         course: "B.Tech Mechanical"
//     });

//     return res.json({
//         success: true,
//         answer: `There are ${count} B.Tech Mechanical students.`
//     });
// }


// // Count B.Tech Civil students
// if (
//     question.includes("how many") &&
//     question.includes("civil")
// ) {

//     const count = await Student.countDocuments({
//         course: "B.Tech Civil"
//     });

//     return res.json({
//         success: true,
//         answer: `There are ${count} B.Tech Civil students.`
//     });
// }
//        // Convert student data into text
// const studentData = students.map((student) => {
//     return `
// Name: ${student.name}
// Roll No: ${student.rollNo}
// Course: ${student.course}
// Semester: ${student.semester}
// CGPA: ${student.cgpa}
// Email: ${student.email}
// Phone: ${student.phone}
// `;
// }).join("\n----------------------\n");

// const finalPrompt = `
// You are an AI assistant for a Student Management System.

// You must answer ONLY using the student records below.

// Rules:
// 1. Give short and direct answers.
// 2. Do NOT explain your thinking.
// 3. Do NOT say "I will count" or "Going through the list".
// 4. If asked for a count, return only the final number with a short sentence.
// 5. If asked for names, return only the names.
// 6. If the information is not available, reply: "Information not found."

// Student Records:

// ${studentData}

// User Question:
// ${prompt}
// `;
// const answer = await askAI(finalPrompt);

// // Return AI response
// res.json({
//     success: true,
//     answer
// });

//     } catch (error) {

//         console.log(error);

//         res.status(500).json({
//             success: false,
//             message: error.message
//         });

//     }
// };









const Student = require("../models/Student");
const askAI = require("../services/huggingfaceService");

exports.askAI = async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt || !prompt.trim()) {
            return res.status(400).json({
                success: false,
                message: "Prompt is required"
            });
        }

        const question = prompt.toLowerCase().trim();

        // =====================================================
        // 1. TOTAL STUDENTS
        // =====================================================

        if (
            question.includes("total students") ||
            question.includes("total number of students") ||
            question.includes("overall students") ||
            question.includes("all students")
        ) {
            const count = await Student.countDocuments();

            return res.json({
                success: true,
                answer: `There are ${count} students in total.`
            });
        }

        // =====================================================
        // 2. STUDENTS IN EACH COURSE
        // =====================================================

        if (
            question.includes("each course") ||
            question.includes("every course") ||
            question.includes("course wise") ||
            question.includes("course-wise") ||
            question.includes("coursewise")
        ) {
            const courseCounts = await Student.aggregate([
                {
                    $group: {
                        _id: "$course",
                        count: { $sum: 1 }
                    }
                },
                {
                    $sort: {
                        _id: 1
                    }
                }
            ]);

            if (courseCounts.length === 0) {
                return res.json({
                    success: true,
                    answer: "No students found."
                });
            }

            const answer = courseCounts
                .map(course => `${course._id}: ${course.count}`)
                .join("\n");

            return res.json({
                success: true,
                answer
            });
        }

        // =====================================================
        // 3. AI & ML STUDENTS
        // =====================================================

        if (
            question.includes("ai/ml") ||
            question.includes("aiml") ||
            question.includes("ai & ml") ||
            question.includes("ai and ml") ||
            question.includes("ai ml") ||
            question.includes("artificial intelligence") ||
            question.includes("artificial intelligence and machine learning")
        ) {
            const count = await Student.countDocuments({
                course: "B.Tech AI & ML"
            });

            return res.json({
                success: true,
                answer: `There are ${count} B.Tech AI & ML students.`
            });
        }

        // =====================================================
        // 4. CSE STUDENTS
        // =====================================================

        if (
            question.includes("cse") ||
            question.includes("computer science")
        ) {
            const count = await Student.countDocuments({
                course: "B.Tech CSE"
            });

            return res.json({
                success: true,
                answer: `There are ${count} B.Tech CSE students.`
            });
        }

        // =====================================================
        // 5. IT STUDENTS
        // =====================================================

        if (
            question.includes("b.tech it") ||
            question.includes("btech it") ||
            question.includes("information technology")
        ) {
            const count = await Student.countDocuments({
                course: "B.Tech IT"
            });

            return res.json({
                success: true,
                answer: `There are ${count} B.Tech IT students.`
            });
        }

        // =====================================================
        // 6. ECE STUDENTS
        // =====================================================

        if (
            question.includes("ece") ||
            question.includes("electronics")
        ) {
            const count = await Student.countDocuments({
                course: "B.Tech ECE"
            });

            return res.json({
                success: true,
                answer: `There are ${count} B.Tech ECE students.`
            });
        }

        // =====================================================
        // 7. MECHANICAL STUDENTS
        // =====================================================

        if (question.includes("mechanical")) {
            const count = await Student.countDocuments({
                course: "B.Tech Mechanical"
            });

            return res.json({
                success: true,
                answer: `There are ${count} B.Tech Mechanical students.`
            });
        }

        // =====================================================
        // 8. CIVIL STUDENTS
        // =====================================================

        if (question.includes("civil")) {
            const count = await Student.countDocuments({
                course: "B.Tech Civil"
            });

            return res.json({
                success: true,
                answer: `There are ${count} B.Tech Civil students.`
            });
        }

        // =====================================================
        // 9. SEMESTER COUNT
        // =====================================================

        if (
            question.includes("semester") &&
            (
                question.includes("how many") ||
                question.includes("count") ||
                question.includes("number")
            )
        ) {
            const match = question.match(/semester\s*(\d+)/);

            if (match) {
                const semester = match[1];

                const count = await Student.countDocuments({
                    semester: semester
                });

                return res.json({
                    success: true,
                    answer: `There are ${count} students in semester ${semester}.`
                });
            }
        }

        // =====================================================
        // 10. GENERAL AI QUESTION
        // =====================================================

        const students = await Student.find();

        const studentData = students
            .map(student => {
                return `
Name: ${student.name}
Roll No: ${student.rollNo}
Course: ${student.course}
Semester: ${student.semester}
CGPA: ${student.cgpa}
Email: ${student.email}
Phone: ${student.phone}
`;
            })
            .join("\n----------------------\n");

        const finalPrompt = `
You are an AI assistant for a Student Management System.

Answer the user's question using the student records below.

Rules:
1. Give short and direct answers.
2. Do not explain your thinking.
3. Do not invent student information.
4. If information is not available, say "Information not found."
5. If the user asks a general educational question, answer normally.

Student Records:

${studentData}

User Question:
${prompt}
`;

        const answer = await askAI(finalPrompt);

        return res.json({
            success: true,
            answer
        });

    } catch (error) {
        console.error("AI Controller Error:", error);

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};