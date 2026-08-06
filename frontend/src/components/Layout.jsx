import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../styles/Layout.css";

function Layout({ children }) {
    return (
        <div className="layout">

            <Sidebar />

            <div className="layout-right">

                <Navbar />

                <main className="layout-content">

                    {children}

                </main>

            </div>

        </div>
    );
}

export default Layout;