import React, { useState } from 'react';
import axios from '../services/axiosInstance';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer', // or 'professional'
  });

  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('/auth/register', formData);
      alert("Registered Successfully!");
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" type="text" placeholder="Full Name" onChange={handleChange} className="w-full p-2 border" required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border" required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border" required />

        <select name="role" onChange={handleChange} className="w-full p-2 border">
          <option value="customer">Customer</option>
          <option value="professional">Professional</option>
        </select>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;

// some new thing must be put in the new-feature
sf