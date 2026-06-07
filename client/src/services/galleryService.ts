import { apiClient } from "./apiClient";

export const getGalleryImages = async () => {
    const response = await apiClient.get(`api/gallery/a`);
    
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

export const deleteGalleryImages = async(imageIds: string[]) => {
    const response = await apiClient.post("api/gallery/delete-bulk/", {ids: imageIds});
    return response.data;
}