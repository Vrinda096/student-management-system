import { Link } from "react-router-dom";

function Sidebar() {

    const role = localStorage.getItem("role");

    return (

        <div className="sidebar">

            <h2>
                🎓 SMS
            </h2>


            {/* ================= ADMIN SIDEBAR ================= */}

            {role === "admin" && (
                <>
                    <Link to="/dashboard">
                        🏠 Dashboard
                    </Link>

                    <Link to="/students">
                        👨‍🎓 Students
                    </Link>

                    <Link to="/add-student">
                        ➕ Add Student
                    </Link>

                    <Link to="/ai">
                        🤖 AI Assistant
                    </Link>
                </>
            )}


            {/* ================= STUDENT SIDEBAR ================= */}

            {role === "student" && (
                <>
                    <Link to="/profile">
                        👤 My Profile
                    </Link>

                    <Link to="/ai">
                        🤖 AI Assistant
                    </Link>
                </>
            )}

        </div>

    );

}

export default Sidebar;