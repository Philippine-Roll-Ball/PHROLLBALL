import {apiClient } from "./apiClient";


export const loginUser = async (credentials: {email: string; password: string }) => {

    const response = await apiClient.post("/api/auth/login", credentials);
    return response.data;

};

export const registerUser = async(credentials: {email: string; password: string}) => {
    const response = await apiClient.post("/api/auth/register", credentials);
    return response.data;
}

export const getAdminData = async () => {
    const response = await apiClient.get("/api/admin/dashboard");
    return response.data;
}


// more api calls here