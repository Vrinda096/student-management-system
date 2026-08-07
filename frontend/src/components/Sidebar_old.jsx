import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {

    const location = useLocation();
    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");

    };

    return (

        <aside className="sidebar">

            <div className="logo">

                🎓 SMS

            </div>

            <nav>

                <Link
                    className={location.pathname==="/dashboard"?"active":""}
                    to="/dashboard"
                >
                    🏠 Dashboard
                </Link>

                <Link
                    className={location.pathname==="/students"?"active":""}
                    to="/students"
                >
                    👨‍🎓 Students
                </Link>

                <Link
                    className={location.pathname==="/add-student"?"active":""}
                    to="/add-student"
                >
                    ➕ Add Student
                </Link>

                <Link
                    className={location.pathname==="/ai"?"active":""}
                    to="/ai"
                >
                    🤖 AI Assistant
                </Link>

            </nav>

            <button
                className="logout-btn"
                onClick={logout}
            >
                Logout
            </button>

        </aside>

    );

}

export default Sidebar;