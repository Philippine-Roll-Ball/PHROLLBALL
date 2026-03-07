import axios from "axios";
import { auth } from "@/config/firebase";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const apiClient = axios.create( {
    baseURL: API_BASE_URL,
    headers: {
        "Content-type": "application/json",
    },
});

apiClient.interceptors.request.use(
    async (config) => {
        const user = auth.currentUser;
        if(user) {
            const token = await user.getIdToken();
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config
    },
    (error) => {
        return Promise.reject(error);
    }
)

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response?.status === 401) {
            console.error("Session Expired. Please Login Again.");
            window.location.href = "/";
        }
        return Promise.reject(error);
    }
    
)