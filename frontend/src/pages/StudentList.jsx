import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
import "../styles/StudentList.css";
import { toast } from "react-toastify";

function StudentList() {

    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCourse, setSelectedCourse] = useState("");
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const handleView = (student) => {
    setSelectedStudent(student);
    setShowModal(true);
};
    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await api.get("/students");

            console.log(response.data);

            setStudents(response.data.students);

        } catch (error) {
            console.log(error);

            alert(error.response?.data?.message || "Error Fetching Students");

        } finally {
            setLoading(false);
        }
    };
    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this student?"
        );

        if (!confirmDelete) return;

        try {

            await api.delete(`/students/${id}`);

            toast.success("Student Deleted Successfully");

            fetchStudents();

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Delete Failed"
            );

        }

    };
    if (loading) {
        return <h2>Loading...</h2>;
    }
    const filteredStudents = students.filter((student) => {

        const matchesSearch =

            student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||

            student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||

            student.course.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCourse =

            selectedCourse === "" ||

            student.course === selectedCourse;

        return matchesSearch && matchesCourse;

    });
    return (

        <div className="student-container">

            <div className="student-header">

                <h2>Students</h2>

                <Link
                    to="/add-student"
                    className="add-btn"
                >

                    + Add Student

                </Link>

            </div>

            <div className="filter-section">

                <input
                    type="text"
                    placeholder="🔍 Search Student..."
                    className="search-box"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <select
                    className="course-filter"
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                >

                    <option value="">All Courses</option>

                    <option value="B.Tech CSE">B.Tech CSE</option>

                    <option value="B.Tech AI & ML">B.Tech AI & ML</option>

                    <option value="B.Tech IT">B.Tech IT</option>

                    <option value="B.Tech ECE">B.Tech ECE</option>

                    <option value="B.Tech Mechanical">B.Tech Mechanical</option>

                    <option value="B.Tech Civil">B.Tech Civil</option>

                </select>

            </div>

            <br /><br />

            <table className="student-table">

                <thead>

                    <tr>

                        <th>Name</th>
                        <th>Roll</th>
                        <th>Course</th>
                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>
                    {filteredStudents.length > 0 ? (
                        filteredStudents.map((student) => (
                            <tr key={student._id}>
                                <td>{student.name}</td>
                                <td>{student.rollNo}</td>
                                <td>{student.course}</td>

                                <td>
                                    <button
    type="button"
    className="view-btn"
    onClick={() => {
        console.log("View clicked");
        alert("View clicked");
        handleView(student);
    }}
>
    👁 View
</button>

                                    <Link to={`/edit-student/${student._id}`}>
                                        <button className="edit-btn">
                                            ✏ Edit
                                        </button>
                                    </Link>

                                    <button
                                        className="delete-btn"
                                        onClick={() => handleDelete(student._id)}
                                    >
                                        🗑 Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">
                                No Students Found
                            </td>
                        </tr>
                    )}
                </tbody>

            </table>

            {showModal && selectedStudent && (
    <div className="modal-overlay">
        <div className="modal">
            <h2>Student Details</h2>

           <p><strong>Name:</strong> {selectedStudent.name}</p>
<p><strong>Roll No:</strong> {selectedStudent.rollNo}</p>
<p><strong>Course:</strong> {selectedStudent.course}</p>
<p><strong>Semester:</strong> {selectedStudent.semester}</p>

<p><strong>CGPA:</strong> {selectedStudent.cgpa}</p>

<p><strong>Result:</strong> {selectedStudent.result}</p>

<p><strong>Gender:</strong> {selectedStudent.gender}</p>

<p><strong>Email:</strong> {selectedStudent.email}</p>

<p><strong>Phone:</strong> {selectedStudent.phone}</p>

<p><strong>Address:</strong> {selectedStudent.address}</p>

            <button
                className="close-btn"
                onClick={() => setShowModal(false)}
            >
                Close
            </button>
        </div>
    </div>
)}

        </div>

    );

}

export default StudentList;