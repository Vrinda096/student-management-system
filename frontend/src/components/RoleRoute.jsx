import { Navigate } from "react-router-dom";

function RoleRoute({ children, allowedRole }) {

    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    // Not logged in
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // Wrong role
    if (role !== allowedRole) {

        if (role === "student") {
            return <Navigate to="/profile" replace />;
        }

        if (role === "admin") {
            return <Navigate to="/dashboard" replace />;
        }

        return <Navigate to="/login" replace />;
    }

    return children;
}

export default RoleRoute;