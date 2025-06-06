import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useAuth } from "./context/AuthContext";
import CustomerDashboard from "./pages/dashboards/CustomerDashboard";
import ProfessionalDashboard from "./pages/dashboards/ProfessionalDashboard";
import AdminDashboard from "./pages/dashboards/AdminDashboard";

function App() {
  const { user } = useAuth();

  const renderDashboard = () => {
    if (!user) return <Navigate to="/login" />;
    switch (user.role) {
      case "customer":
        return <CustomerDashboard />;
      case "professional":
        return <ProfessionalDashboard />;
      case "admin":
        return <AdminDashboard />;
      default:
        return <Navigate to="/login" />;
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={renderDashboard()} />
    </Routes>
  );
}

export default App;