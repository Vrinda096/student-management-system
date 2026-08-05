import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar(){

    return(

        <div className="sidebar">

            <h2>
                Student MS
            </h2>


            <Link to="/dashboard">
                🏠 Dashboard
            </Link>


            <Link to="/students">
                👨‍🎓 Students
            </Link>


            <Link to="/add-student">
                ➕ Add Student
            </Link>


        </div>

    );

}

export default Sidebar;