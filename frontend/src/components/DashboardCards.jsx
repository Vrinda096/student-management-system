import "../styles/Dashboard.css";

function DashboardCards({ title, value, icon, color }) {

    return (

        <div
            className="dashboard-card"
            style={{ borderTop: `5px solid ${color}` }}
        >

            <div className="card-icon">

                {icon}

            </div>

            <h2>{value}</h2>

            <p>{title}</p>

        </div>

    );

}

export default DashboardCards;