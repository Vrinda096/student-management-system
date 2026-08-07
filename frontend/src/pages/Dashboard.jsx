import { useEffect, useState } from "react";
import api from "../services/api";

import Layout from "../components/Layout";
import DashboardCards from "../components/DashboardCards";

import QuickActions from "../components/QuickActions";

import RecentStudents from "../components/RecentStudents";

import {
    FaUserGraduate,
    FaBook,
    FaCheckCircle,
    FaMale,
    FaFemale
} from "react-icons/fa";

import "../styles/Dashboard.css";

function Dashboard() {

    const [loading, setLoading] = useState(true);

    const [students, setStudents] = useState([]);

    const [totalStudents, setTotalStudents] = useState(0);

    const [totalCourses, setTotalCourses] = useState(0);

    const [maleStudents, setMaleStudents] = useState(0);

    const [femaleStudents, setFemaleStudents] = useState(0);

    const [systemStatus, setSystemStatus] = useState("Active");

    useEffect(() => {

        fetchDashboardData();

    }, []);

    const fetchDashboardData = async () => {

        try {

            const response = await api.get("/students");

            const data = response.data.students;

            setStudents(data);

            setTotalStudents(data.length);

            const uniqueCourses = [
                ...new Set(
                    data
                        .map(student => student.course?.trim())
                        .filter(Boolean)
                )
            ];

            setTotalCourses(uniqueCourses.length);

            setMaleStudents(

                data.filter(

                    student => student.gender === "Male"

                ).length

            );

            setFemaleStudents(

                data.filter(

                    student => student.gender === "Female"

                ).length

            );

            setSystemStatus("Active");

        } catch (err) {

            console.log(err);

            setSystemStatus("Inactive");

        } finally {

            setLoading(false);

        }

    };

    return (

        <Layout>

            <div className="dashboard-heading">

                <h1>Dashboard</h1>

                <p>

                    Welcome to the Student Management System

                </p>

            </div>

            <div className="cards-grid">

                <DashboardCards
                    title="Students"
                    value={loading ? "..." : totalStudents}
                    icon={<FaUserGraduate />}
                    color="#2563EB"
                />

                <DashboardCards
                    title="Courses"
                    value={loading ? "..." : totalCourses}
                    icon={<FaBook />}
                    color="#7C3AED"
                />

                <DashboardCards
                    title="System"
                    value={loading ? "..." : systemStatus}
                    icon={<FaCheckCircle />}
                    color="#22C55E"
                />

            </div>


            <div className="dashboard-bottom">

                <QuickActions />

                <RecentStudents students={students} />

            </div>


        </Layout>

    );

}


export default Dashboard;

