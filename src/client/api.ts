import axios from 'axios';
const isClient = typeof window !== "undefined";

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  headers: {
    Authorization: isClient
      ? `Bearer ${window.localStorage.getItem("accessToken") } {${window.localStorage.getItem("refreshToken")}`
      : "",
  },
});

