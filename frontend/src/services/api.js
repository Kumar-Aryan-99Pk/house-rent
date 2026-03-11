import axios from "axios";

const API = axios.create({
  baseURL: "https://homehunt-backend.onrender.com/api"
});

export default API;