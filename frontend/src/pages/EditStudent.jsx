import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import StudentForm from "../components/StudentForm";
import { toast } from "react-toastify";
function EditStudent() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        rollNo: "",
        course: "",
        semester: "",
        email: "",
        phone: ""
    });

    useEffect(() => {

        fetchStudent();

    }, []);

    const fetchStudent = async () => {

        try {

            const response = await api.get(`/students/${id}`);

            setFormData(response.data.student);

        } catch (error) {

            alert("Unable to load student");

        }

    };

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.put(`/students/${id}`, formData);

            toast.success("Student Updated Successfully");

            navigate("/students");

        } catch (error) {
    console.log(error);
    console.log(error.response);

    alert(error.response?.data?.message || "Update Failed");
}

    };

    return (

    <StudentForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        buttonText="✏️ Update Student"
        title="Update Student"
        subtitle="Modify the student details below"
    />

);

}

export default EditStudent;