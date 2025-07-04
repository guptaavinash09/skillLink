import React, { useState, useEffect, useContext } from 'react';
import axios from '../services/axiosInstance';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProfessionalProfilePage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    profession: '',
    experience: '',
    location: '',
    bio: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // If non-professional tries to access
  useEffect(() => {
    if (!user || user.role !== 'professional') {
      navigate('/');
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const res = await axios.put('/professionals/profile', formData);
      setMessage('Profile updated successfully!');
    } catch (err) {
      setError(err.response?.data?.message || 'Profile update failed');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Professional Profile Setup</h2>

      {error && <p className="text-red-600">{error}</p>}
      {message && <p className="text-green-600">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="profession"
          placeholder="Your Profession (e.g., Electrician)"
          value={formData.profession}
          onChange={handleChange}
          className="w-full p-2 border"
          required
        />
        <input
          type="text"
          name="experience"
          placeholder="Experience (e.g., 5 years)"
          value={formData.experience}
          onChange={handleChange}
          className="w-full p-2 border"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Your Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 border"
          required
        />
        <textarea
          name="bio"
          placeholder="Tell customers about your work..."
          value={formData.bio}
          onChange={handleChange}
          className="w-full p-2 border"
          rows="3"
        />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default ProfessionalProfilePage;
