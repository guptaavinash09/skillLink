import { createContext, useState, useEffect, useContext } from "react";
import axios from "../api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const res = await axios.get("/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (err) {
        setUser(null);
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
