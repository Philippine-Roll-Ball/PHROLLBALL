import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// GET /api/test
export const getTestJson = async (): Promise<{ message: string }> => {
  const response = await apiClient.get("/api/test");
  return response.data;
};