function StudentDashboard(){

const user=JSON.parse(localStorage.getItem("user"));

return(

<div>

<h1>Student Dashboard</h1>

<h2>{user.name}</h2>

</div>

)

}

export default StudentDashboard;