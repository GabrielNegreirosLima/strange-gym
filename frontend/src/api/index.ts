import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

api.defaults.headers["Access-Control-Allow-Origin"] = "http://localhost:3000";

export default api;
