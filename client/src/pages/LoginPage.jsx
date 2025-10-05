import React, { useState, useContext } from 'react';
import axios from '../services/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await axios.post('/auth/login', formData);
<<<<<<< HEAD
      login(res.data); // save user data + token in context + localStorage
      alert('Login successful!');
      navigate('/');
=======
      login(res.data); // Save user data (e.g., token) in context/localStorage
      alert('Login successful!');

      // ✅ Role-based redirection
      if (res.data.role === 'customer') navigate('/dashboard/customer');
      else if (res.data.role === 'professional') navigate('/dashboard/professional');
      else if (res.data.role === 'admin') navigate('/dashboard/admin');
      else navigate('/'); // fallback route

>>>>>>> new-feature
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-2 border"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-2 border"
<<<<<<< HEAD
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
=======
//           required
//         />
//         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// // I need to make some changes so that i am doing this

// export default LoginPage;



handleChange}
          className="w-full p-2 border"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-2 border"
>>>>>>> new-feature

{/* some cchanges needs to make commit */}