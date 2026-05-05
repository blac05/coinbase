import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.coinbase.com/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.message);
    return Promise.reject(error);
  },
);
