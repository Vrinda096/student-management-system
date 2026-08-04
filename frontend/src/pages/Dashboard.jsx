import CourseChart from "../components/CourseChart";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import { useEffect, useState } from "react";
import api from "../services/api";
import {
    FaHome,
    FaUsers,
    FaPlus,
    FaSignOutAlt,
    FaRobot,
    FaChartBar
} from "react-icons/fa";

function Dashboard() {

    const navigate = useNavigate();
    const role = localStorage.getItem("role");
    const user = JSON.parse(localStorage.getItem("user"));
    const [loading, setLoading] = useState(true);
    const [courseData, setCourseData] = useState([]);
    const [totalStudents, setTotalStudents] = useState(0);
    const [systemStatus, setSystemStatus] = useState("Checking...");
    const [totalCourses, setTotalCourses] = useState(0);
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {

        fetchDashboardData();

    }, []);

    const fetchDashboardData = async () => {

        try {

            const response = await api.get("/students");

            setTotalStudents(response.data.students.length);
            const students = response.data.students;

            const courses = {};

            students.forEach((student) => {
                courses[student.course] = (courses[student.course] || 0) + 1;
            });

            const chartData = Object.keys(courses).map((course) => ({
                course,
                count: courses[course],
            }));
            setCourseData(chartData);
            setTotalCourses(chartData.length);

            // Backend is working
            setSystemStatus("Active");

        } catch (error) {

            console.log(error);

            // Backend is not responding
            setSystemStatus("Inactive");

        } finally {

            setLoading(false);

        }

    };
    const handleLogout = () => {

        localStorage.removeItem("token");

        navigate("/login");

    }

    return (

        <div className={darkMode ? "dashboard dark" : "dashboard"}>
            <div className="sidebar">

                <div className="logo">

                    <h2>🎓 SMS</h2>

                </div>

                <Link to="/dashboard">

                    <FaHome />

                    Dashboard

                </Link>

                <Link to="/students">

                    <FaUsers />

                    Students

                </Link>

                {role === "admin" && (
                    <Link to="/add-student">
                        <FaPlus />
                        Add Student
                    </Link>
                )}
                <Link to="/ai">

                    <FaRobot />

                    AI Assistant

                </Link>

                <button
                    className="logout-btn"
                    onClick={handleLogout}
                >

                    <FaSignOutAlt />

                    {" "}Logout

                </button>

            </div>

            <div className="main">
                <div className="navbar">

                    <h2>
                        Welcome {user?.name}
                    </h2>

                    <p>
                        Logged in as <b>{role.toUpperCase()}</b>
                    </p>

                    <div className="user">

                        <button
                            className="theme-btn"
                            onClick={() => setDarkMode(!darkMode)}
                        >
                            {darkMode ? "☀️ Light" : "🌙 Dark"}
                        </button>

                    </div>

                </div>

                <div className="cards">

                    {role === "admin" ? (
                        <>
                            <div className="card">
                                <h2>{loading ? "..." : totalStudents}</h2>
                                <p>Total Students</p>
                            </div>

                            <div className="card">
                                <h2>{loading ? "..." : totalCourses}</h2>
                                <p>Courses</p>
                            </div>

                            <div
                                className={`card ${systemStatus === "Active"
                                        ? "active-card"
                                        : "inactive-card"
                                    }`}
                            >
                                <h2>
                                    {systemStatus === "Active" ? "🟢" : "🔴"}
                                </h2>

                                <p>System {systemStatus}</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="card">
                                <h2>{user?.name}</h2>
                                <p>Student Name</p>
                            </div>

                            <div className="card">
                                <h2>Student</h2>
                                <p>Role</p>
                            </div>

                            <div className="card">
                                <h2>👁️</h2>
                                <p>View Only Access</p>
                            </div>
                        </>
                    )}

                </div>

                <div className="activity">
                    <h2>System Overview</h2>

                    <ul>
                        <li>📚 Manage student records easily</li>
                        <li>👨‍🎓 Add, update, and remove students</li>
                        <li>📊 View student information instantly</li>
                    </ul>
                </div>
<div className="chart-section">
    <h2>
        <FaChartBar /> Course Distribution
    </h2>

    <CourseChart courseData={courseData} />
</div>
                <div className="quick-actions">

                    <h2 style={{ marginBottom: "20px" }}>
                        ⚡ Quick Actions
                    </h2>

                    <div className="action-buttons">



                        <Link to="/students" className="action-btn">
                            👨 View Students
                        </Link>
                        <Link to="/ai" className="action-btn">
                            🤖 AI Assistant
                        </Link>

                    </div>


                </div>


            </div>

        </div>

    );

}

export default Dashboard;
