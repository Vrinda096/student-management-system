import { Bar } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function CourseChart({ courseData }) {

    const data = {
        labels: courseData.map((c) => c.course),

        datasets: [
            {
                label: "Number of Students",
                data: courseData.map((c) => c.count),

                backgroundColor: [
                    "#3B82F6",
                    "#10B981",
                    "#F59E0B",
                    "#EF4444",
                    "#8B5CF6",
                    "#06B6D4",
                ],

                borderRadius: 8,
            },
        ],
    };

    const options = {
        responsive: true,

        plugins: {
            legend: {
                position: "top",
            },

            title: {
                display: true,
                text: "Students by Course",
            },
        },
    };

    return <Bar data={data} options={options} />;
}

export default CourseChart;