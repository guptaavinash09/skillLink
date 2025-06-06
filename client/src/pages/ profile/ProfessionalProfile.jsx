import { useState, useEffect } from "react";
import { fetchProfile, updateProfile } from "../../api";
import { useAuth } from "../../context/AuthContext";

export default function ProfessionalProfile() {
  const { user } = useAuth();
  const [profile, setProfile] = useState({
    profession: "",
    skills: "",
    hourlyRate: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    async function loadProfile() {
      try {
        const res = await fetchProfile();
        if (res.data) setProfile(res.data);
      } catch (err) {
        console.log("No profile found");
      }
    }
    loadProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(profile);
      alert("Profile updated!");
    } catch (err) {
      alert("Update failed");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-6">
      <h2 className="text-xl font-bold mb-4">Professional Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="profession"
          value={profile.profession}
          onChange={handleChange}
          placeholder="Profession (e.g., Carpenter)"
          className="w-full border px-3 py-2 rounded"
          required
        />
        <textarea
          name="skills"
          value={profile.skills}
          onChange={handleChange}
          placeholder="Skills / Description"
          className="w-full border px-3 py-2 rounded"
          rows={4}
          required
        />
        <input
          type="number"
          name="hourlyRate"
          value={profile.hourlyRate}
          onChange={handleChange}
          placeholder="Hourly Rate (₹)"
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="text"
          name="address"
          value={profile.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          value={profile.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full border px-3 py-2 rounded"
          required
        />
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">
          Save Profile
        </button>
      </form>
    </div>
  );
}
