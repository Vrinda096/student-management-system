import {
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

function CourseChart({ students }) {

    const courseData = [];

    students.forEach(student => {

        const existing = courseData.find(
            item => item.course === student.course
        );

        if(existing){

            existing.students++;

        }else{

            courseData.push({

                course:student.course,

                students:1

            });

        }

    });

    return(

        <div className="chart-card">

            <h2>📊 Students by Course</h2>

            <ResponsiveContainer
                width="100%"
                height={350}
            >

                <BarChart
                    data={courseData}
                >

                    <CartesianGrid
                        strokeDasharray="3 3"
                    />

                    <XAxis dataKey="course"/>

                    <YAxis/>

                    <Tooltip/>

                    <Bar
                        dataKey="students"
                        fill="#2563EB"
                    />

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

}

export default CourseChart;