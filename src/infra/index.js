import axios from "axios";

const api = axios.create({
  baseURL: `https://api.hgbrasil.com/weather`,
  params: {
    key: "",
  },
  body: { nome: process.env.API_KEY },
});

export default api;
