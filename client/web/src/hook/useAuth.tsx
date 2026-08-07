import { createContext, useContext, useState, ReactNode } from "react";
import { signOut as firebaseSignOut } from "firebase/auth";
import { auth } from "@/config/firebase";


export type AuthContextType = {
  isAuthenticated: boolean;
  role: string | null;
  loading: boolean;
  setAuthSession: (token: string, userRole: string) => void;
  signOut: () => Promise<void>;
};
const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  role: null,
  loading: false,
  setAuthSession: () => {},
  signOut: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return !!localStorage.getItem("jwtToken");
  });

  const [role, setRole] = useState<string | null>(() => {
    return localStorage.getItem("userRole");
  });


  const [loading] = useState(false);


  const setAuthSession = (token: string, userRole: string) => {
    setIsAuthenticated(true);
    setRole(userRole);
  };
  
  const signOut = async () => {
    try {

      localStorage.removeItem("jwtToken");
      localStorage.removeItem("userRole");
  

      console.log("user successfully Logged out");
      setIsAuthenticated(false);
      setRole(null);
      
      await firebaseSignOut(auth); 
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, loading, setAuthSession, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}