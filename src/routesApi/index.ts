import { axiosInstance } from "@/client/api";
import axios from "axios";

interface LoginData {
  email: string;
  password: string;
}
export const fetchLogin = async ({email , password}: LoginData ) => {
  try {
    const response = await axiosInstance.post('/login', { email, password }, {
      withCredentials: true, // Important for including cookies
    });
    // Directly return response data
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // Error from the server (backend)
      throw new Error(error.response.data.message);
    } else {
      // Network error or other unexpected issues
      throw new Error('An unexpected error occurred. Please try again later.');
    }
  }
};


export const fetchLogout = async () => {
  try {
    const response = await axiosInstance.post('/logout',null , {
      withCredentials: true, // Important for including cookies
    });
    // Directly return response data
    return response.data;
  } catch (error) {
    console.error("Error during logout:", error);
    throw error; // Re-throw the error for the caller to handle
  }
};

export const fetchAllPackage = async () => {
  try {
    const response = await axiosInstance.get('/getPackage', {
      withCredentials: true, // Important for including cookies
    });
    // Directly return response data
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // Error from the server (backend)
      throw new Error(error.response.data.message);
    } else {
      // Network error or other unexpected issues
      throw new Error('An unexpected error occurred. Please try again later.');
    }
  }
};