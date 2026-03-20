import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { onAuthStateChanged, signOut as firebaseSignOut, User as FirebaseUser } from "firebase/auth";
import { auth } from "@/config/firebase";

// 1. Define the shape of our global auth state
type AuthContextType = {
  user: FirebaseUser | null;
  role: string | null;
  loading: boolean;
  signOut: () => Promise<void>;
};

// 2. Create the actual Context
const AuthContext = createContext<AuthContextType>({
  user: null,
  role: null,
  loading: true,
  signOut: async () => {},
});

// 3. Create the Provider Component (The "Master Brain")
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        try {
          const tokenResult = await currentUser.getIdTokenResult();
          setRole(tokenResult.claims.role as string || null);
        } catch (error) {
          console.error("Error fetching user role:", error);
          setRole(null);
        }
      } else {
        setUser(null);
        setRole(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, role, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// 4. Export the hook so your components can still use `const { user } = useAuth();`
export function useAuth() {
  return useContext(AuthContext);
}