import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import { toast } from "react-toastify";
import "../styles/Auth.css";
function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        const response = await api.post("/auth/login", {
            email,
            password,
        });

        const user = response.data.user;
        const token = response.data.token;

        // Save authentication information
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("role", user.role);

        toast.success(response.data.message || "Login Successful");

        // Redirect according to role
        if (user.role === "admin") {

            navigate("/dashboard");

        } else if (user.role === "student") {

            navigate("/profile");

        } else {

            toast.error("Invalid user role");

            localStorage.clear();

        }

    } catch (error) {

        console.log(error);

        toast.error(
            error.response?.data?.message || "Login Failed"
        );

    }

};

    return (

        <div className="auth-container">

            <div className="auth-card">

                <h1 className="auth-title">

                    🎓 Student Management System

                </h1>

                <p className="auth-subtitle">

                    Welcome Back 👋

                </p>

                <form
                    className="auth-form"
                    onSubmit={handleSubmit}
                >

                    <input

                        type="email"

                        placeholder="Enter Email"

                        value={email}

                        onChange={(e) => setEmail(e.target.value)}

                        required

                    />

                    <input

                        type="password"

                        placeholder="Enter Password"

                        value={password}

                        onChange={(e) => setPassword(e.target.value)}

                        required

                    />

                    <button
                        className="auth-btn"
                        type="submit"
                    >

                        Login →

                    </button>

                </form>

                <div className="auth-footer">

                    Don't have an account?

                    {" "}

                    <Link to="/register">

                        Register

                    </Link>

                </div>

            </div>

        </div>

    );
}

export default Login;