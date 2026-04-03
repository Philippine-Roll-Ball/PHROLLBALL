

// sample hook structure I should follow 
// import { useQuery } from '@tanstack/react-query';
// import { getPlayerById } from '../services/playerService';

// export const usePlayer = (id: string) => {
//   return useQuery({
//     queryKey: ['player', id],
//     queryFn: () => getPlayerById(id), // Calling the service
//   });
// };

 
import { registerPlayer } from "@/services/playerService";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { User } from "@/types/user";

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

