import { apiClient } from "@/services/apiClient";
import { User } from "@/types/user";


// first get the type interface 

// write the api call either get, post, path, or delete

export const registerPlayer = async (user: User) => {
    const { data } = await apiClient.post("api/user/register", user);
    return data;
}


