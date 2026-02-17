import { useState } from "react";

type MockUser = {
  email: string;
};

export function useAuth() {
  const [user, setUser] = useState<MockUser | null>({
    email: "admin@rollball.ph",
  });

  const [loading] = useState(false);

  const signOut = () => {
    setUser(null);
  };

  return {
    user,
    loading,
    signOut,
  };
}
