import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import api from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import "../styles/StudentList.css";
import { toast } from "react-toastify";

function StudentList() {

    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCourse, setSelectedCourse] = useState("");
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const role = localStorage.getItem("role");
    const handleView = (student) => {

    // Get existing recently viewed students
    const existing =
        JSON.parse(localStorage.getItem("recentStudents")) || [];

    // Remove this student if already present
    const filtered = existing.filter(
        item => item._id !== student._id
    );

    // Put newly viewed student at the top
    const updated = [
        {
            ...student,
            viewedAt: new Date().toISOString()
        },
        ...filtered
    ];

    // Keep only latest 5
    localStorage.setItem(
        "recentStudents",
        JSON.stringify(updated.slice(0, 5))
    );

    // Open modal
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

        <div className="student-page">

            <div className="student-header">

                <h2>Students</h2>

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


            <table className="student-table">

                <thead>

                    <tr>

                        <th>Name</th>
                        <th>Roll No</th>
                        <th>Course</th>
                        <th>CGPA</th>
                        <th>Result</th>
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
                                <td>{student.cgpa}</td>
                                <td>{student.result}</td>

                                <td>
                                    <div className="action-buttons">

                                        {/* View Button */}
                                        <button
                                            className="action-btn view-btn"
                                            onClick={() => handleView(student)}
                                        >
                                            <FaEye />
                                            View
                                        </button>


                                        {/* Edit Button */}
                                        <Link
                                            to={`/edit-student/${student._id}`}
                                            className="action-btn edit-btn"
                                        >
                                            <FaEdit />
                                            Edit
                                        </Link>


                                        {/* Delete Button */}
                                        <button
                                            className="action-btn delete-btn"
                                            onClick={() => handleDelete(student._id)}
                                        >
                                            <FaTrash />
                                            Delete
                                        </button>

                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">
                                No Students Found
                            </td>
                        </tr>
                    )}
                </tbody>

            </table>

            {showModal && selectedStudent && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2 className="profile-title">
                            👨‍🎓 Student Profile
                        </h2>

                        <p><span>👤 Name</span> {selectedStudent.name}</p>

                        <p><span>🆔 Roll No</span> {selectedStudent.rollNo}</p>

                        <p><span>📚 Course</span> {selectedStudent.course}</p>

                        <p><span>🎓 Semester</span> {selectedStudent.semester}</p>

                        <hr />

                        <p><span>📊 CGPA</span> {selectedStudent.cgpa}</p>

                        <p><span>📄 Result</span> {selectedStudent.result}</p>

                        <p><span>🚻 Gender</span> {selectedStudent.gender}</p>

                        <hr />

                        <p><span>📧 Email</span> {selectedStudent.email}</p>

                        <p><span>📱 Phone</span> {selectedStudent.phone}</p>

                        <p><span>📍 Address</span> {selectedStudent.address}</p>

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