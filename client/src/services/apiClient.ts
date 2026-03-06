import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const apiClient = axios.create( {
    baseURL: API_BASE_URL,
    withCredentials: true,
    headers: {
        "Content-type": "application/json",
    },
});


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