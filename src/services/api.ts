import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}` || 'http://localhost:3000',
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, Content-Length, X-Requested-With",
}
});

export default api;
