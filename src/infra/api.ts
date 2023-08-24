import axios from "axios";
export const api = axios.create({
  baseURL: "http://localhost:8081/",
});

api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("team-token");
    if (token) {
      config.headers!["x-access-token"] =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndpbGxpYW1ubWlyYW5kYUBnbWFpbC5jb20iLCJpYXQiOjE2OTI4NDExMzMsImV4cCI6MTk5Mjg0MTEzM30.K7PNmM3dhLGkqvGae6wD5P5-jT07amlvfW_CltLIQCo";
    }
    return config;
  },
  () => {
    return Promise.reject("promisse error");
  }
);

export default api;
