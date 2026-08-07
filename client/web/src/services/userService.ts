import { apiClient } from "@/services/apiClient";
import { User } from "@/types/user";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import { auth, googleProvider } from "@/config/firebase";


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
            
            const { data } = await apiClient.post("api/auth/login", { firebaseUserToken: idToken});
            
            const customToken = data.token
            const decodedToken = decodeJwt(data.token);
            const userRole = decodedToken?.role;
            localStorage.setItem("jwtToken", customToken);
            localStorage.setItem("userRole", userRole);

            console.log("Login successful!", data);

            return {customToken, userRole};
        }catch (error) {
            console.error("Login failed", error);
            return null
        }
    },

    googleLogin: async() => {
        const userCredential = await signInWithPopup(auth, googleProvider);
        const idToken = await userCredential.user.getIdToken();

        console.log(idToken);
        const { data } = await apiClient.post("api/auth/login", { firebaseUserToen: idToken });

        localStorage.setItem("jwtToken", data.token);
        localStorage.setItem("userRole", data.role);
        return data
    }
}

const decodeJwt = (token: string) => {
    try {
        // A JWT has 3 parts separated by dots. The payload is the 2nd part (index 1).
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    } catch (e) {
        console.error("Failed to decode JWT", e);
        return null;
    }
}