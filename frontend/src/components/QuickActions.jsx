import { Link } from "react-router-dom";

import {
FaUserGraduate,
FaPlusCircle,
FaRobot
} from "react-icons/fa";

function QuickActions(){

return(

<div className="quick-card">

<h2>

Quick Actions

</h2>

<div className="quick-grid">

<Link to="/students">

<FaUserGraduate/>

<span>

Students

</span>

</Link>

<Link to="/add-student">

<FaPlusCircle/>

<span>

Add Student

</span>

</Link>

<Link to="/ai">

<FaRobot/>

<span>

AI Assistant

</span>

</Link>

</div>

</div>

);

}

export default QuickActions;