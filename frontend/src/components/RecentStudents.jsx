import { useEffect, useState } from "react";

function RecentStudents() {

    const [recentStudents, setRecentStudents] = useState([]);

    useEffect(() => {

        const recent =
            JSON.parse(localStorage.getItem("recentStudents")) || [];

        setRecentStudents(recent);

    }, []);

    return (

        <div className="student-table">

            <h2>📋 Recently Viewed Students</h2>

            {recentStudents.length === 0 ? (

                <p style={{ marginTop: "20px", color: "#64748b" }}>
                    No students viewed yet.
                </p>

            ) : (

                <table>

                    <thead>

                        <tr>
                            <th>Name</th>
                            <th>Course</th>
                        </tr>

                    </thead>

                    <tbody>

                        {recentStudents.map(student => (

                            <tr key={student._id}>

                                <td>{student.name}</td>

                                <td>{student.course}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            )}

        </div>

    );

}

export default RecentStudents;