import { apiClient } from "./apiClient";

export const getGalleryItems = async () => {
    const response = await apiClient.get("api/gallery");
    return response.data;
}