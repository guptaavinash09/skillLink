import { useAuth } from "../../context/AuthContext";

export default function ProfessionalDashboard() {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.name} 🛠️</h1>
      <p className="text-gray-600">This is your Professional Dashboard.</p>
      {/* Later: Add My Calendar, Bookings etc */}
    </div>
  );
}
