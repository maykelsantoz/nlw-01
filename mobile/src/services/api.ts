import axios from "axios";

const api = axios.create({
  baseURL: "http://10.94.1.76:3333",
});

export default api;
