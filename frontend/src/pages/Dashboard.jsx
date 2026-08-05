import { Link, useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import { useEffect, useState } from "react";
import api from "../services/api";
function Dashboard() {

    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    const [loading, setLoading] = useState(true);
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

const uniqueCourses = [
  ...new Set(
    students
      .map(student => student.course?.trim())
      .filter(Boolean)
  )
];

setTotalCourses(uniqueCourses.length);

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


                    Dashboard

                </Link>

                <Link to="/students">


                    Students

                </Link>


                <Link to="/ai">

                
                    AI Assistant

                </Link>

                <button
                    className="logout-btn"
                    onClick={handleLogout}
                >

                    {" "}Logout

                </button>

            </div>

            <div className="main">
                <div className="navbar">

                    <h2>
                        Welcome {user?.name}
                    </h2>

                    <p>
                        Welcome to Student Management System
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
                        <h2>{systemStatus === "Active" ? "🟢" : "🔴"}</h2>
                        <p>System {systemStatus}</p>
                    </div>
                </div>

                <div className="activity">
                    <h2>System Overview</h2>

                    <ul>
                        <li>📚 Manage student records easily</li>
                        <li>👨‍🎓 Add, update, and remove students</li>
                        <li>📊 View student information instantly</li>
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
