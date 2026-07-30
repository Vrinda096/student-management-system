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

            const response = await api.get("/api/students");

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

                <Link to="/add-student">

                    <FaPlus />

                    Add Student

                </Link>
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

                    <h1>📊 Dashboard</h1>

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

                        <p>
                            System {systemStatus}
                        </p>
                    </div>

                </div>

                <div className="activity">

                    <h2>Recent Activities</h2>

                    <ul>

                        <li>✅ Student records loaded successfully</li>

                        <li>✅ Authentication is active</li>

                        <li>✅ Database connected</li>

                    </ul>

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
