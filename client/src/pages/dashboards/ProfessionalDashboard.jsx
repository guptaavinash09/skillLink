import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ProfessionalDashboard() {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.name} 🛠️</h1>
      <Link to="/profile/professional" className="text-green-600 underline mb-4 inline-block">
        Edit Profile
      </Link>
      {/* Later: Add My Calendar, Bookings etc */}
    </div>
  );
}
