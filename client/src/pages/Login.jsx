import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80 space-y-4">
        <h2 className="text-xl font-bold text-center">Login</h2>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
      </form>
    </div>
  );
}
