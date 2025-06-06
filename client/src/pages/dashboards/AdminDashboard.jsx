import { useAuth } from "../../context/AuthContext";

export default function AdminDashboard() {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Panel - {user.name} 🧑‍💼</h1>
      <p className="text-gray-600">This is your Admin Dashboard.</p>
      {/* Later: Add Manage Users, Reports etc */}
    </div>
  );
}
