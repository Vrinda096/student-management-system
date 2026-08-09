const Student = require("../models/Student");
const askAI = require("../services/huggingfaceService");
exports.generateAI = async (req, res) => {
    try {

        const { prompt } = req.body;

        // Get all students from MongoDB
        const students = await Student.find();
        const question = prompt.toLowerCase();

        // Count TOTAL students
if (
    question.includes("how many students") ||
    question.includes("total students") ||
    question.includes("number of students") ||
    question === "how many students are there"
) {
    const count = await Student.countDocuments();

    return res.json({
        success: true,
        answer: `${count}`
    });
}

        // Count B.Tech CSE students
if (
    question.includes("how many") &&
    question.includes("cse")
) {

    const count = await Student.countDocuments({
        course: "B.Tech CSE"
    });

    return res.json({
        success: true,
        answer: `There are ${count} B.Tech CSE students.`
    });
}


// Count B.Tech AI & ML students
if (
    question.includes("how many") &&
    (question.includes("ai") || question.includes("ai & ml") || question.includes("artificial intelligence"))
) {

    const count = await Student.countDocuments({
        course: "B.Tech AI & ML"
    });

    return res.json({
        success: true,
        answer: `There are ${count} B.Tech AI & ML students.`
    });
}


// Count B.Tech IT students
if (
    question.includes("how many") &&
    question.includes("it")
) {

    const count = await Student.countDocuments({
        course: "B.Tech IT"
    });

    return res.json({
        success: true,
        answer: `There are ${count} B.Tech IT students.`
    });
}


// Count B.Tech ECE students
if (
    question.includes("how many") &&
    question.includes("ece")
) {

    const count = await Student.countDocuments({
        course: "B.Tech ECE"
    });

    return res.json({
        success: true,
        answer: `There are ${count} B.Tech ECE students.`
    });
}


// Count B.Tech Mechanical students
if (
    question.includes("how many") &&
    question.includes("mechanical")
) {

    const count = await Student.countDocuments({
        course: "B.Tech Mechanical"
    });

    return res.json({
        success: true,
        answer: `There are ${count} B.Tech Mechanical students.`
    });
}


// Count B.Tech Civil students
if (
    question.includes("how many") &&
    question.includes("civil")
) {

    const count = await Student.countDocuments({
        course: "B.Tech Civil"
    });

    return res.json({
        success: true,
        answer: `There are ${count} B.Tech Civil students.`
    });
}
       // Convert student data into text
const studentData = students.map((student) => {
    return `
Name: ${student.name}
Roll No: ${student.rollNo}
Course: ${student.course}
Semester: ${student.semester}
CGPA: ${student.cgpa}
Email: ${student.email}
Phone: ${student.phone}
`;
}).join("\n----------------------\n");

const finalPrompt = `
You are an AI assistant for a Student Management System.

You must answer ONLY using the student records below.

Rules:
1. Give short and direct answers.
2. Do NOT explain your thinking.
3. Do NOT say "I will count" or "Going through the list".
4. If asked for a count, return only the final number with a short sentence.
5. If asked for names, return only the names.
6. If the information is not available, reply: "Information not found."

Student Records:

${studentData}

User Question:
${prompt}
`;
const answer = await askAI(finalPrompt);

// Return AI response
res.json({
    success: true,
    answer
});

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};