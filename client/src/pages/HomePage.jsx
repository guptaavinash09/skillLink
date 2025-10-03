<<<<<<< HEAD
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="max-w-xl mx-auto p-6 text-center bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-4">Welcome to SkillLink 👋</h1>

      {user ? (
        <div className="space-y-4">
          <p className="text-xl">
            Hello, <span className="font-semibold">{user.name}</span>!
          </p>
          <p>Your role: <span className="font-medium">{user.role}</span></p>

          {user.role === 'customer' && (
            <button
              onClick={() => navigate('/book')}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Book a Professional
            </button>
          )}

          {user.role === 'professional' && (
            <button
              onClick={() => navigate('/calendar')}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              View Your Appointments
            </button>
          )}

          {user.role === 'admin' && (
            <button
              onClick={() => navigate('/admin')}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Go to Admin Dashboard
            </button>
          )}

          <br />
          <button
            onClick={handleLogout}
            className="mt-6 bg-gray-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <p className="text-lg">You're not logged in.</p>
          <button
            onClick={() => navigate('/login')}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
          >
            Go to Login
          </button>
        </div>
      )}
=======
import React from 'react';

const HomePage = () => {
  return (
    <div className="p-4 text-xl">
      <h1>Welcome to SkillLink!</h1>
>>>>>>> new-feature
    </div>
  );
};

export default HomePage;
{/* IN this directory her esome wrong code is pushed */}

{/* this need to make changes */}