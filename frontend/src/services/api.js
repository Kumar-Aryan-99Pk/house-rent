import axios from "axios";

const API = axios.create({
  baseURL: "https://househunt-backend.onrender.com/api"
});

export default API;