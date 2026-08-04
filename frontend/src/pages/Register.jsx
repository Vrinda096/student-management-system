import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";
import "../styles/Login.css";
import "../styles/Auth.css";
function Register() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("student");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

          const response = await api.post("/auth/register", {
    name,
    email,
    password,
    role
});


            toast.success(response.data.message);

            navigate("/login");

        } catch (error) {

            toast.error(
                error.response?.data?.message || "Registration Failed"
            );

        }

    };

    return(

<div className="auth-container">

<div className="auth-card">

<h1 className="auth-title">

🎓 Student Management System

</h1>

<p className="auth-subtitle">

Create Your Account

</p>

<form
className="auth-form"
onSubmit={handleSubmit}
>

<input

type="text"

placeholder="Full Name"

value={name}

onChange={(e)=>setName(e.target.value)}

required

/>

<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

required

/>

<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

required

/>

<button
className="auth-btn"
type="submit"
>

Register →

</button>

</form>

<div className="auth-footer">

Already have an account?

{" "}

<Link to="/login">

Login

</Link>

</div>

</div>

</div>

);

}

export default Register;