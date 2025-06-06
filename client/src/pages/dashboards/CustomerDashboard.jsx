import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function CustomerDashboard() {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.name} 👋</h1>
      <Link to="/profile/customer" className="text-blue-600 underline mb-4 inline-block">
        Edit Profile
      </Link>
      {/* Later: Add Search Professionals, Booking etc */}
    </div>
  );
}
