// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import api from "../services/api";
// import { toast } from "react-toastify";
// import "../styles/Login.css";
// import "../styles/Auth.css";
// function Register() {

//     const navigate = useNavigate();

//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [role, setRole] = useState("student");

//     const handleSubmit = async (e) => {

//         e.preventDefault();

//         try {

//             const response = await api.post("/auth/register", {
//                 name,
//                 email,
//                 password,

//             });


//             toast.success(response.data.message);

//             navigate("/login");

//         } catch (error) {

//             toast.error(
//                 error.response?.data?.message || "Registration Failed"
//             );

//         }

//     };

//     return (

//         <div className="auth-container">

//             <div className="auth-card">

//                 <h1 className="auth-title">

//                     🎓 Student Management System

//                 </h1>

//                 <p className="auth-subtitle">

//                     Create Your Account

//                 </p>

//                 <form
//                     className="auth-form"
//                     onSubmit={handleSubmit}
//                 >

//                     <input

//                         type="text"

//                         placeholder="Full Name"

//                         value={name}

//                         onChange={(e) => setName(e.target.value)}

//                         required

//                     />

//                     <input

//                         type="email"

//                         placeholder="Email"

//                         value={email}

//                         onChange={(e) => setEmail(e.target.value)}

//                         required

//                     />

//                     <input

//                         type="password"

//                         placeholder="Password"

//                         value={password}

//                         onChange={(e) => setPassword(e.target.value)}

//                         required

//                     />

//                     <button
//                         className="auth-btn"
//                         type="submit"
//                     >

//                         Register →

//                     </button>

//                 </form>

//                 <div className="auth-footer">

//                     Already have an account?

//                     {" "}

//                     <Link to="/login">

//                         Login

//                     </Link>

//                 </div>

//             </div>

//         </div>

//     );

// }

// export default Register;


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";
import "../styles/Auth.css";
import "../styles/Login.css";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        rollNo: "",
        course: "",
        semester: "",
        phone: "",
        cgpa: "",
        result: "Pass",
        gender: "",
        address: ""
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post(
                "/auth/register",
                formData
            );

            toast.success(
                response.data.message ||
                "Registration Successful"
            );

            navigate("/login");

        } catch (error) {

            console.log(
                "Registration error:",
                error.response?.data
            );

            toast.error(
                error.response?.data?.message ||
                "Registration Failed"
            );

        }

    };

    return (

        <div className="auth-container">

            <div className="auth-card">

                <h1 className="auth-title">
                    🎓 Student Registration
                </h1>

                <p className="auth-subtitle">
                    Create your student account
                </p>

                <form
                    className="auth-form"
                    onSubmit={handleSubmit}
                >

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="rollNo"
                        placeholder="Enter Roll Number"
                        value={formData.rollNo}
                        onChange={handleChange}
                        required
                    />

                    <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                    >
                        <option value="">
                            Select Course
                        </option>

                        <option value="B.Tech CSE">
                            B.Tech CSE
                        </option>

                        <option value="B.Tech AI & ML">
                            B.Tech AI & ML
                        </option>

                        <option value="B.Tech IT">
                            B.Tech IT
                        </option>

                        <option value="B.Tech ECE">
                            B.Tech ECE
                        </option>

                        <option value="B.Tech Mechanical">
                            B.Tech Mechanical
                        </option>

                        <option value="B.Tech Civil">
                            B.Tech Civil
                        </option>

                    </select>

                    <input
                        type="number"
                        name="semester"
                        placeholder="Enter Semester"
                        value={formData.semester}
                        onChange={handleChange}
                        min="1"
                        max="8"
                        required
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Enter Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        name="cgpa"
                        placeholder="Enter CGPA"
                        value={formData.cgpa}
                        onChange={handleChange}
                        min="0"
                        max="10"
                        step="0.01"
                        required
                    />

                    <select
                        name="result"
                        value={formData.result}
                        onChange={handleChange}
                        required
                    >
                        <option value="Pass">
                            Pass
                        </option>

                        <option value="Fail">
                            Fail
                        </option>

                    </select>

                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">
                            Select Gender
                        </option>

                        <option value="Male">
                            Male
                        </option>

                        <option value="Female">
                            Female
                        </option>

                        <option value="Other">
                            Other
                        </option>

                    </select>

                    <textarea
                        name="address"
                        placeholder="Enter Address"
                        value={formData.address}
                        onChange={handleChange}
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

                    Already have an account?{" "}

                    <Link to="/login">
                        Login
                    </Link>

                </div>

            </div>

        </div>

    );

}

export default Register;