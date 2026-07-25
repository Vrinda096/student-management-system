import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";
import "../styles/StudentProfile.css";

function StudentProfile() {

    const { id } = useParams();

    const [student, setStudent] = useState(null);

    useEffect(() => {

        fetchStudent();

    }, []);

    const fetchStudent = async () => {

        try {

            const res = await api.get(`/students/${id}`);

            setStudent(res.data.student);

        }

        catch (err) {

            console.log(err);

        }

    };

    if (!student)

        return <h2>Loading...</h2>;

    return (

    <div className="profile-container">

        <div className="profile-card">

            <div className="avatar">
                👨‍🎓
            </div>

            <h1>{student.name}</h1>

            <div className="profile-details">

                <div className="detail-row">
                    <span className="label">🆔 Roll Number</span>
                    <span>{student.rollNo}</span>
                </div>

                <div className="detail-row">
                    <span className="label">📚 Course</span>
                    <span>{student.course}</span>
                </div>

                <div className="detail-row">
                    <span className="label">🎓 Semester</span>
                    <span>{student.semester}</span>
                </div>

                <div className="detail-row">
                    <span className="label">📧 Email</span>
                    <span>{student.email}</span>
                </div>

                <div className="detail-row">
                    <span className="label">📱 Phone</span>
                    <span>{student.phone}</span>
                </div>

            </div>

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

        </div>

    </div>

);
}

export default StudentProfile;