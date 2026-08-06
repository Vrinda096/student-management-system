import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import StudentForm from "../components/StudentForm";
import { toast } from "react-toastify";
import Layout from "../components/Layout";
function AddStudent() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    course: "",
    semester: "",
    email: "",
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

            await api.post("/students", formData);

            toast.success("Student Added Successfully");

            navigate("/students");

        } catch (error) {
    console.log(error.response);

    alert(error.response?.data?.message || "Something went wrong");
}

    };

//     return (

//     <StudentForm
//     formData={formData}
//     handleChange={handleChange}
//     handleSubmit={handleSubmit}
//     buttonText="➕ Add Student"
//     title="Add New Student"
//     subtitle="Fill in the student details below"
// />

// );

return (
    <Layout>
        <StudentForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            buttonText="➕ Add Student"
            title="Add New Student"
            subtitle="Fill in the student details below"
        />
    </Layout>
);

}

export default AddStudent;