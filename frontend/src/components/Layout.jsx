import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../styles/Layout.css";

function Layout({ children }) {

    const [darkMode, setDarkMode] = useState(false);

    return (

        <div className={darkMode ? "layout dark" : "layout"}>

            <Sidebar />

            <div className="layout-right">

                <Navbar
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                />

                <main className="layout-content">

                    {children}

                </main>

            </div>

        </div>

    );

}

export default Layout;