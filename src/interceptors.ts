import axios from "axios";
import { apiKey, apiUrl } from "./config";
const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(function (config: any) {
  const token = `Bearer ${apiKey}`;
  config.headers.Authorization = token;
  return config;
});

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;