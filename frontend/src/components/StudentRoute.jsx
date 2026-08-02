import { Navigate } from "react-router-dom";

function StudentRoute({children}){

const role=localStorage.getItem("role");

return role==="student"
?children
:<Navigate to="/login"/>

}

export default StudentRoute;