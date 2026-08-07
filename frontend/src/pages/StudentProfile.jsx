import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import Layout from "../components/Layout";
import "../styles/StudentProfile.css";

function StudentProfile() {

    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));
    const role = localStorage.getItem("role");

    const markAsRecentlyViewed = (student) => {

    const existing =
        JSON.parse(localStorage.getItem("recentStudents")) || [];

    // Remove the student if already present
    const filtered = existing.filter(
        item => item._id !== student._id
    );

    // Put the newly viewed student at the top
    const updated = [
        {
            ...student,
            viewedAt: new Date().toISOString()
        },
        ...filtered
    ];

    // Keep only the latest 5
    localStorage.setItem(
        "recentStudents",
        JSON.stringify(updated.slice(0, 5))
    );

    // Tell other components that recent students changed
    window.dispatchEvent(
        new Event("recentStudentsUpdated")
    );
};

    useEffect(() => {

        fetchStudent();

    }, []);

    // const fetchStudent = async () => {

    //     try {

    //         /*
    //          * For a student:
    //          * the backend should return the student linked
    //          * to the logged-in user.
    //          */

    //         const res = await api.get("/students/me");

    //         setStudent(res.data.student);
    //         markAsRecentlyViewed(res.data.student);

    //     } catch (error) {

    //         console.log(error);

    //     } finally {

    //         setLoading(false);

    //     }

    // };
    const fetchStudent = async () => {

    try {

        let res;

        if (role === "student") {

            // Student can only see their own profile
            res = await api.get("/students/me");

        } else {

            // Admin views the selected student's profile
            const id = window.location.pathname.split("/").pop();

            res = await api.get(`/students/${id}`);

        }

        setStudent(res.data.student);

        // Only admin views should appear in
        // "Recently Viewed Students"
        if (role === "admin") {
            markAsRecentlyViewed(res.data.student);
        }

    } catch (error) {

        console.log(error);

    } finally {

        setLoading(false);

    }

};

    if (loading) {

        return (
            <Layout>
                <h2>Loading profile...</h2>
            </Layout>
        );

    }

    if (!student) {

        return (
            <Layout>
                <h2>Student profile not found.</h2>
            </Layout>
        );

    }

    return (

        <Layout>

            <div className="profile-container">

                <div className="profile-card">

                    <div className="avatar">
                        👨‍🎓
                    </div>

                    <h1>{student.name}</h1>

                    <div className="profile-details">

                        <div className="detail-row">
                            <span className="label">
                                🆔 Roll Number
                            </span>

                            <span>
                                {student.rollNo}
                            </span>
                        </div>

                        <div className="detail-row">
                            <span className="label">
                                📚 Course
                            </span>

                            <span>
                                {student.course}
                            </span>
                        </div>

                        <div className="detail-row">
                            <span className="label">
                                🎓 Semester
                            </span>

                            <span>
                                {student.semester}
                            </span>
                        </div>

                        <div className="detail-row">
                            <span className="label">
                                📧 Email
                            </span>

                            <span>
                                {student.email}
                            </span>
                        </div>

                        <div className="detail-row">
                            <span className="label">
                                📱 Phone
                            </span>

                            <span>
                                {student.phone}
                            </span>
                        </div>

                        <div className="detail-row">
                            <span className="label">
                                📊 CGPA
                            </span>

                            <span>
                                {student.cgpa}
                            </span>
                        </div>

                        <div className="detail-row">
                            <span className="label">
                                📄 Result
                            </span>

                            <span>
                                {student.result}
                            </span>
                        </div>

                        <div className="detail-row">
                            <span className="label">
                                🚻 Gender
                            </span>

                            <span>
                                {student.gender}
                            </span>
                        </div>

                        <div className="detail-row">
                            <span className="label">
                                🏠 Address
                            </span>

                            <span>
                                {student.address}
                            </span>
                        </div>

                    </div>

                    {role === "admin" && (

                        <div className="profile-buttons">

                            <Link to={`/edit-student/${student._id}`}>

                                <button className="edit-btn">
                                    ✏️ Edit Student
                                </button>

                            </Link>

                            <Link to="/students">

                                <button className="back-btn">
                                    ⬅️ Back
                                </button>

                            </Link>

                        </div>

                    )}

                </div>

            </div>

        </Layout>

    );

}

export default StudentProfile;