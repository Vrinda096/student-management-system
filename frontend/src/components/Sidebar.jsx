// import { Link } from "react-router-dom";
// import "../styles/Sidebar.css";
// import { useNavigate } from "react-router-dom";

// function Sidebar() {

//     const role = localStorage.getItem("role");
//     const navigate = useNavigate();

//     const handleLogout = () => {

//         // Remove login information
//         localStorage.removeItem("token");
//         localStorage.removeItem("role");
//         localStorage.removeItem("user");

//         // Go back to login page
//         navigate("/login");
//     };

//     return (

//         <div className="sidebar">

//             <h2>
//                 🎓 SMS
//             </h2>

//             {/* ================= ADMIN SIDEBAR ================= */}

//             {role === "admin" && (
//                 <>
//                     <Link to="/dashboard">
//                         🏠 Dashboard
//                     </Link>

//                     <Link to="/students">
//                         👨‍🎓 Students
//                     </Link>

//                     <Link to="/add-student">
//                         ➕ Add Student
//                     </Link>

//                     <Link to="/ai">
//                         🤖 AI Assistant
//                     </Link>
//                 </>
//             )}

//             {/* ================= STUDENT SIDEBAR ================= */}

//             {role === "student" && (
//                 <>
//                     <Link to="/profile">
//                         👤 My Profile
//                     </Link>

//                     {/* <Link to="/add-profile">
//                         ➕ Add Profile
//                     </Link> */}


//                 </>
//             )}


// {/* ================= LOGOUT ================= */ }

// <button
//     className="logout-btn"
//     onClick={handleLogout}
// >
//     🚪 Logout
// </button>

//         </div >

//     );
// }

// export default Sidebar;




import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Sidebar.css";

function Sidebar({ collapsed, setCollapsed }) {

    const role = localStorage.getItem("role");

    return (

        <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>

            {/* LOGO + COLLAPSE BUTTON */}
            <div className="sidebar-top">

                {!collapsed && (
                    <h2 className="sidebar-logo">
                        🎓 SMS
                    </h2>
                )}

                <button
                    className="sidebar-toggle"
                    onClick={() => setCollapsed(!collapsed)}
                    aria-label={
                        collapsed
                            ? "Expand sidebar"
                            : "Collapse sidebar"
                    }
                    title={
                        collapsed
                            ? "Expand sidebar"
                            : "Collapse sidebar"
                    }
                >
                    {collapsed ? <FaBars /> : <FaTimes />}
                </button>

            </div>


            {/* ================= ADMIN ================= */}

            {role === "admin" && (

                <nav className="sidebar-nav">

                    <Link to="/dashboard" title="Dashboard">
                        <span className="sidebar-icon">🏠</span>
                        <span className="sidebar-text">
                            Dashboard
                        </span>
                    </Link>

                    <Link to="/students" title="Students">
                        <span className="sidebar-icon">👨‍🎓</span>
                        <span className="sidebar-text">
                            Students
                        </span>
                    </Link>

                    <Link to="/add-student" title="Add Student">
                        <span className="sidebar-icon">➕</span>
                        <span className="sidebar-text">
                            Add Student
                        </span>
                    </Link>

                    <Link to="/ai" title="AI Assistant">
                        <span className="sidebar-icon">🤖</span>
                        <span className="sidebar-text">
                            AI Assistant
                        </span>
                    </Link>

                </nav>

            )}


            {/* ================= STUDENT ================= */}

            {role === "student" && (

                <nav className="sidebar-nav">

                    <Link to="/profile" title="My Profile">
                        <span className="sidebar-icon">👤</span>
                        <span className="sidebar-text">
                            My Profile
                        </span>
                    </Link>

                    {/* <Link to="/add-profile" title="Complete Profile">
                        <span className="sidebar-icon">📝</span>
                        <span className="sidebar-text">
                            Complete Profile
                        </span>
                    </Link>

                    <Link to="/ai" title="AI Assistant">
                        <span className="sidebar-icon">🤖</span>
                        <span className="sidebar-text">
                            AI Assistant
                        </span>
                    </Link> */}

                </nav>

            )}


            {/* ================= LOGOUT ================= */}

            <button
                className="logout-btn"
                onClick={() => {

                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    localStorage.removeItem("role");
                    localStorage.removeItem("recentStudents");

                    window.location.href = "/login";

                }}
                title="Logout"
            >

                <span className="sidebar-icon">
                    🚪
                </span>

                <span className="sidebar-text">
                    Logout
                </span>

            </button>

        </aside>

    );

}

export default Sidebar;















