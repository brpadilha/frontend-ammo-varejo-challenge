import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}` || 'http://localhost:3000',
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers": "X-CSRF-TOKEN, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
    "Access-Control-Allow-Credentials": "true",
    "referer":'https://frontend-ammo-varejo-challenge.vercel.app',
    "METHOD": "GET",
}
});

export default api;
