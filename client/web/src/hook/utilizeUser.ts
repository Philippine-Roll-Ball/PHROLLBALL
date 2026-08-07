

// sample hook structure I should follow 
// import { useQuery } from '@tanstack/react-query';
// import { getPlayerById } from '../services/playerService';

// export const usePlayer = (id: string) => {
//   return useQuery({
//     queryKey: ['player', id],
//     queryFn: () => getPlayerById(id), // Calling the service
//   });
// };

 
import { registerPlayer } from "@/services/userService";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { User } from "@/types/user";
import { useState } from "react";
import { authService } from "@/services/userService";

export const usePlayer = () => {
    const queryClient = useQueryClient();

    const registerQuery = useMutation({
        mutationFn: (user: User ) => registerPlayer(user),

        onSuccess: (data) =>  {
            queryClient.invalidateQueries({ queryKey: ['players']});
            console.log("player registered", data);
        },
        onError: (error) => {
            console.error("Error registering player:", error);
        }
    });
    return {
        registerPlayerAsync: registerQuery.mutateAsync,
        registerPlayer: registerQuery.mutate,
        isRegistering: registerQuery.isPending,
        error: registerQuery.error,
        isSuccess: registerQuery.isSuccess,
    }
}

export const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError ] = useState<string | null>(null);

    const loginUser = async (email: string, password: string) => {
        setLoading(true);
        setError(null);

        try {
            const authenticatedUser = await authService.login(email, password);
            
            return authenticatedUser;
        } catch (error) {
            console.error("Login failed", error);
            setError(error.message.replace("Firebase: ", ""));
        } finally  {
            setLoading(false);
        }
    };

    const loginGoogle = async () => {
        setLoading(true);
        setError(null);
        
        try {
            const data = await authService.googleLogin();
            return data
        } catch (error) {
            console.error("Google login failed", error);
            if (error.code !== 'auth/popup-closed-by-user') {
                setError(error.message?.replace("Firebase: ", "") || "Google Login Failed.");
            }
            return null;
        } finally {
            setLoading(false);
        }
    }
    return { loginGoogle, loginUser, loading, error}

}

