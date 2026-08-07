function RecentStudents({ students }) {

    return (

        <div className="recent-card">

            <h2>📋 Recent Students</h2>

            <table>

                <thead>

                    <tr>
                        <th>Name</th>
                        <th>Course</th>
                    </tr>

                </thead>

                <tbody>

                    {students.map((student) => (

                        <tr key={student._id}>

                            <td>{student.name}</td>

                            <td>{student.course}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default RecentStudents;