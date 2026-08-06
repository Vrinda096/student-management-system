import "../styles/Navbar.css";

function Navbar() {

    const user =
        JSON.parse(localStorage.getItem("user"));

    const today = new Date().toLocaleDateString(
        "en-IN",
        {
            weekday:"long",
            day:"numeric",
            month:"long",
            year:"numeric"
        }
    );

    return (

        <header className="navbar">

            <div>

                <h2>

                    Welcome, {user?.name || "User"} 👋

                </h2>

                <p>{today}</p>

            </div>

            <div className="navbar-right">

                <button className="theme-btn">

                    🌙 Dark

                </button>

            </div>

        </header>

    );

}

export default Navbar;