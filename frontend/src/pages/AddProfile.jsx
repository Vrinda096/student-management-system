import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Layout from "../components/Layout";
import { toast } from "react-toastify";
import "../styles/StudentForm.css";

function AddProfile() {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const [formData, setFormData] = useState({
        name: user?.name || "",
        email: user?.email || "",
        rollNo: "",
        course: "",
        semester: "",
        phone: "",
        cgpa: "",
        result: "",
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

            await api.post("/students/me", formData);

            toast.success("Profile created successfully!");

            navigate("/profile");

        } catch (error) {

            console.log("Profile creation error:", error);

            toast.error(
                error.response?.data?.message ||
                "Failed to create profile"
            );

        }

    };

    return (

        <Layout>

            <div className="form-page">

                <div className="form-card">

                    <h1>🎓 Complete Your Profile</h1>

                    <p>
                        Please enter your student details
                    </p>

                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            readOnly
                        />

                        <input
                            type="text"
                            name="rollNo"
                            placeholder="Roll Number"
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

                        <select
                            name="semester"
                            value={formData.semester}
                            onChange={handleChange}
                            required
                        >

                            <option value="">
                                Select Semester
                            </option>

                            <option value="1">1st Semester</option>
                            <option value="2">2nd Semester</option>
                            <option value="3">3rd Semester</option>
                            <option value="4">4th Semester</option>
                            <option value="5">5th Semester</option>
                            <option value="6">6th Semester</option>
                            <option value="7">7th Semester</option>
                            <option value="8">8th Semester</option>

                        </select>

                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="number"
                            name="cgpa"
                            placeholder="CGPA"
                            step="0.01"
                            min="0"
                            max="10"
                            value={formData.cgpa}
                            onChange={handleChange}
                            required
                        />

                        <select
                            name="result"
                            value={formData.result}
                            onChange={handleChange}
                            required
                        >

                            <option value="">
                                Select Result
                            </option>

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
                            placeholder="Address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />

                        <button
                            type="submit"
                            className="submit-btn"
                        >
                            Save Profile
                        </button>

                    </form>

                </div>

            </div>

        </Layout>

    );

}

export default AddProfile;