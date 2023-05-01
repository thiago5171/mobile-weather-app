import axios from "axios";

const api = axios.create({
  baseURL: `https://api.hgbrasil.com/weather?key=e82a50d6`,
});

export default api;
