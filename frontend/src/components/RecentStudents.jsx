import { useEffect, useState } from "react";

function RecentStudents() {

    const [recentStudents, setRecentStudents] = useState([]);

    useEffect(() => {

        const loadRecentStudents = () => {

            const recent =
                JSON.parse(localStorage.getItem("recentStudents")) || [];

            setRecentStudents(recent);

        };

        // Load when Dashboard opens
        loadRecentStudents();

        // Check again if localStorage changes
        window.addEventListener(
            "recentStudentsUpdated",
            loadRecentStudents
        );

        return () => {
            window.removeEventListener(
                "recentStudentsUpdated",
                loadRecentStudents
            );
        };

    }, []);

    return (

        <div className="recent-card">

            <h2>📋 Recently Viewed Students</h2>

            {recentStudents.length === 0 ? (

                <p>No students viewed yet.</p>

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