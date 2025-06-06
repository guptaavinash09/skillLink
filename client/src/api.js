import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api", // change this if needed
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;

export const fetchProfile = () => axios.get("/profile/me");
export const updateProfile = (data) => axios.post("/profile", data);