import { Link } from "react-router-dom";

function StudentDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="student-dashboard">
      <h1>🎓 Student Dashboard</h1>

      <div className="student-card">
        <h2>Welcome, {user?.name}</h2>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Role:</strong> {user?.role}</p>
      </div>

      <div className="student-menu">
        <Link to={`/student/${user.id}`}>👤 My Profile</Link>
        <Link to="/ai">🤖 AI Assistant</Link>
      </div>
    </div>
  );
}

export default StudentDashboard;