import axios from "axios";

const api = axios.create({
  baseURL: `https://api.hgbrasil.com/weather`,
  params: {
    key: "110ddf32",
  },

});

export default api;
