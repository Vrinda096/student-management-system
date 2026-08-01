import "../styles/StudentForm.css";
function StudentForm({
    formData,
    handleChange,
    handleSubmit,
    buttonText,
    title = "Add New Student",
    subtitle = "Fill in the student details below"
}) {

    return (

        <div className="form-page">

            <div className="form-card">

                <h1 className="form-title">
                    {title}
                </h1>

                <p className="form-subtitle">
                    {subtitle}
                </p>

                <form onSubmit={handleSubmit}>

                    <div className="form-row">

                        <div className="form-group">

                            <label>👤 Student Name</label>

                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Student Name"
                                value={formData.name}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="form-group">

                            <label>🆔 Roll Number</label>

                            <input
                                type="text"
                                name="rollNo"
                                placeholder="Enter Roll Number"
                                value={formData.rollNo}
                                onChange={handleChange}
                            />

                        </div>

                    </div>

                    

                    <div className="form-row">

                        <div className="form-group">

                            <label>📚 Course</label>

                            <select
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                            >

                                <option value="">Select Course</option>

                                <option value="B.Tech CSE">B.Tech CSE</option>

                                <option value="B.Tech AI & ML">B.Tech AI & ML</option>

                                <option value="B.Tech IT">B.Tech IT</option>

                                <option value="B.Tech ECE">B.Tech ECE</option>

                                <option value="B.Tech Mechanical">B.Tech Mechanical</option>

                                <option value="B.Tech Civil">B.Tech Civil</option>

                            </select>

                        </div>

                        <div className="form-group">

                            <label>🎓 Semester</label>

                            <select
                                name="semester"
                                value={formData.semester}
                                onChange={handleChange}
                            >

                                <option value="">Select Semester</option>

                                <option value="1">Semester 1</option>

                                <option value="2">Semester 2</option>

                                <option value="3">Semester 3</option>

                                <option value="4">Semester 4</option>

                                <option value="5">Semester 5</option>

                                <option value="6">Semester 6</option>

                                <option value="7">Semester 7</option>

                                <option value="8">Semester 8</option>

                            </select>

                        </div>

                    </div>

                    <br /><br />

                    <div className="form-row">

                        <div className="form-group">

                            <label>📧 Email</label>

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Email"
                                value={formData.email}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="form-group">

                            <label>📱 Phone Number</label>

                            <input
                                type="text"
                                name="phone"
                                placeholder="Enter Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                            />

                        </div>
                        

<div className="form-row">

    <div className="form-group">

        <label>📊 CGPA</label>

        <input
            type="number"
            name="cgpa"
            placeholder="Enter CGPA"
            step="0.01"
            min="0"
            max="10"
            value={formData.cgpa}
            onChange={handleChange}
        />

    </div>

    <div className="form-group">

        <label>📄 Result</label>

        <select
            name="result"
            value={formData.result}
            onChange={handleChange}
        >

            <option value="">Select Result</option>
            <option value="Pass">Pass</option>
            <option value="Fail">Fail</option>

        </select>

    </div>

</div>
<br /><br />

<div className="form-row">

    <div className="form-group">

        <label>🚻 Gender</label>

        <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
        >

            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>

        </select>

    </div>

    <div className="form-group">

        <label>🏠 Address</label>

        <input
            type="text"
            name="address"
            placeholder="Enter Address"
            value={formData.address}
            onChange={handleChange}
        />

    </div>

</div>

                    </div>

                   

                    <button type="submit">

                        {buttonText}

                    </button>

                </form>

            </div>

        </div>

    );

}

export default StudentForm;