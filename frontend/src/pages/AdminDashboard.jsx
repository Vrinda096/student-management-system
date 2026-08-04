import { Link, useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

function AdminDashboard() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <div className="sidebar">

        <div className="logo">
          <h2>🎓 SMS</h2>
        </div>

        <Link to="/admin">🏠 Dashboard</Link>

        <Link to="/students">👨‍🎓 Students</Link>

        <Link to="/add-student">➕ Add Student</Link>

        <Link to="/ai">🤖 AI Assistant</Link>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>

      </div>

      {/* Main */}
      <div className="main">

        <div className="navbar">

          <h1>Admin Dashboard</h1>

          <div className="user">
            Welcome Admin 👋
          </div>

        </div>

        {/* Cards */}

        <div className="cards">

          <div className="card">
            <h2>👨‍🎓</h2>
            <p>Manage Students</p>
          </div>

          <div className="card">
            <h2>➕</h2>
            <p>Add New Student</p>
          </div>

          <div className="card">
            <h2>🤖</h2>
            <p>AI Assistant</p>
          </div>

        </div>

        {/* Quick Actions */}

        <div className="quick-actions">

          <h2>Quick Actions</h2>

          <div className="action-buttons">

            <Link className="action-btn" to="/students">
              View Students
            </Link>

            <Link className="action-btn" to="/add-student">
              Add Student
            </Link>

            <Link className="action-btn" to="/ai">
              Open AI
            </Link>

          </div>

        </div>

        {/* Activity */}

        <div className="activity">

          <h2>Recent Activities</h2>

          <ul>

            <li>✅ Student records loaded</li>

            <li>✅ Admin logged in</li>

            <li>✅ Database connected</li>

          </ul>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;