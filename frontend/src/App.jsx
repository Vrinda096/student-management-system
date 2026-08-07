import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import StudentList from "./pages/StudentList";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import StudentProfile from "./pages/StudentProfile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AIAssistant from "./pages/AIAssistant";
import NotFound from "./pages/NotFound";

import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";
import StudentRoute from "./components/StudentRoute";

function App() {

    return (

        <Routes>

            {/* Public Routes */}

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/register"
                element={<Register />}
            />


            {/* ================= ADMIN ROUTES ================= */}

            <Route
                path="/dashboard"
                element={
                    <AdminRoute>
                        <Dashboard />
                    </AdminRoute>
                }
            />

            <Route
                path="/students"
                element={
                    <AdminRoute>
                        <StudentList />
                    </AdminRoute>
                }
            />

            <Route
                path="/add-student"
                element={
                    <AdminRoute>
                        <AddStudent />
                    </AdminRoute>
                }
            />

            <Route
                path="/edit/:id"
                element={
                    <AdminRoute>
                        <EditStudent />
                    </AdminRoute>
                }
            />


            {/* ================= STUDENT ROUTES ================= */}

            <Route
                path="/profile"
                element={
                    <StudentRoute>
                        <StudentProfile />
                    </StudentRoute>
                }
            />


            {/* ================= COMMON ROUTES ================= */}

            <Route
                path="/ai"
                element={
                    <ProtectedRoute>
                        <AIAssistant />
                    </ProtectedRoute>
                }
            />


            {/* 404 */}

            <Route
                path="*"
                element={<NotFound />}
            />

        </Routes>

    );

}

export default App;