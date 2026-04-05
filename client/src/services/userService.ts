import { apiClient } from "@/services/apiClient";
import { User } from "@/types/user";
import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "@/config/firebase";


// first get the type interface 

// write the api call either get, post, path, or delete

export const registerPlayer = async (user: User) => {

    const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {password, ...dbPayload } = user;
    user.Uid = userCredential.user.uid

    dbPayload.Uid = userCredential.user.uid
    const { data } = await apiClient.post("api/user/register", { ...dbPayload});

    return data;
}



export const authService = {
    login: async (email: string, password: string) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);

            const idToken = await userCredential.user.getIdToken();
            // after successful login, call the api that will issue the jwt token
            
            await signOut(auth);
            const { data } = await apiClient.post("api/auth/login", { token: idToken });

            return data;
        }catch (error) {
            console.error("Login failed", error);
            return null
        }
    }
}