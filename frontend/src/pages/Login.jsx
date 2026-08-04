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
            console.log("API URL:", api.defaults.baseURL);
            console.log("Login URL:", `${api.defaults.baseURL}/auth/login`);

            const response = await api.post("/auth/login", {
                email,
                password,
            });


            console.log("Response:", response.data);
            console.log("Token:", response.data.token);

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("role", response.data.user.role);
            localStorage.setItem("user", JSON.stringify(response.data.user));


            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            );
            console.log("After Saving:", localStorage.getItem("token"));

            toast.success(response.data.message);

            if (response.data.user.role === "admin") {
    navigate("/admin");
} else {
    navigate("/student");
}


        } catch (error) {

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