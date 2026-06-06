import { apiClient } from "./apiClient";

export const getGalleryItems = async () => {
    const response = await apiClient.get(`api/gallery`);
    return response.data;
};

export const uploadGalleryImages = async (formData: FormData) => {
    const response = await apiClient.post(`api/gallery/upload`, formData, {
        headers: {
            "Content-Type": "multipart-formdata",

        },
    });
    return response.data;

};

