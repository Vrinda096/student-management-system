import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {

    const role = localStorage.getItem("role");
    const navigate = useNavigate();

    const handleLogout = () => {

        // Remove login information
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("user");

        // Go back to login page
        navigate("/login");
    };

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

            {/* ================= LOGOUT ================= */}

            <button
                className="logout-btn"
                onClick={handleLogout}
            >
                🚪 Logout
            </button>

        </div>

    );
}

export default Sidebar;