import axios from "axios";
export const api = axios.create({
  baseURL: "http://localhost:8081/",
});

api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("team-token");
    if (token) {
      config.headers!["x-access-token"] = token;
    }
    return config;
  },
  () => {
    return Promise.reject("promisse error");
  }
);

export default api;
