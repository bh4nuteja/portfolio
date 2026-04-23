import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const getProjects = () => API.get("/projects");
export const sendMessage = (data) => API.post("/contact", data);