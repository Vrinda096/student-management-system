import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import StudentList from "./pages/StudentList";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import NotFound from "./pages/NotFound";
import StudentProfile from "./pages/StudentProfile";
import AIAssistant from "./pages/AIAssistant";
function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />
      
<Route
  path="/ai"
  element={
    <ProtectedRoute>
      <AIAssistant />
    </ProtectedRoute>
  }
/>
  <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
      <Route path="/students" element={<StudentList />} />

      <Route
    path="/add-student"
    element={
        <ProtectedRoute allowedRoles={["admin"]}>
            <AddStudent />
        </ProtectedRoute>
    }
/>

     <Route
    path="/edit-student/:id"
    element={
        <ProtectedRoute allowedRoles={["admin"]}>
            <EditStudent />
        </ProtectedRoute>
    }
/>

      <Route path="*" element={<NotFound />} />
    
      <Route path="/student/:id" element={<StudentProfile />} />
     <Route
    path="/students"
    element={
        <ProtectedRoute allowedRoles={["admin", "student"]}>
            <StudentList />
        </ProtectedRoute>
    }
/>

<Route
  path="/student/:id"
  element={
    <ProtectedRoute>
      <StudentProfile />
    </ProtectedRoute>
  }
/>

<Route
  path="/add-student"
  element={
    <ProtectedRoute>
      <AddStudent />
    </ProtectedRoute>
  }
/>
<Route path="/admin"

element={

<AdminRoute>

<AdminDashboard/>

</AdminRoute>

}

/>

<Route path="/student"

element={

<StudentRoute>

<StudentDashboard/>

</StudentRoute>

}

/>
<Route
  path="/edit-student/:id"
  element={
    <ProtectedRoute>
      <EditStudent />
    </ProtectedRoute>
  }
/>
    </Routes>
  );
}

export default App;