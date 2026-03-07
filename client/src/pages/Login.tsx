import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "@/hook/useAuth";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/config/firebase";

export default function Login() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Kung naka-login na, diretso admin
  // if (user) return <Navigate to="/admin" replace />;

  // 2. Handle Email/Password Login via Firebase
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Firebase checks the password instead of your custom API
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in successfully!", userCredential.user);
      
      // Redirect to admin panel upon success
      navigate("/admin");
    } catch (err: any) {
      console.error("Login failed", err);
      // Clean up the Firebase error message for the user
      setError(err.message.replace("Firebase: ", "")); 
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Google Login via Firebase
  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      console.log("Google login successful!", userCredential.user);
      navigate("/admin");
    } catch (err: any) {
      console.error("Google login failed", err);
      
      if (err.code === 'auth/popup-closed-by-user') {
        setError(null); 
      } else {
        setError(err.message.replace("Firebase: ", ""));
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <div className="w-full max-w-md bg-card border border-border rounded-xl p-8 shadow-sm">
        <div className="text-center mb-6">
          <h1 className="font-display text-3xl">Login</h1>
          <p className="text-sm text-muted-foreground">
            Philippine Rollball Federation
          </p>
        </div>

        {/* Display Error Messages */}
        {error && (
          <div className="mb-4 p-3 text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg bg-background"
              placeholder="admin@rollball.ph"
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg bg-background"
              placeholder="••••••••"
              disabled={isLoading}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>

        {/* 4. Google Login Button and Separator */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">Or</span>
          </div>
        </div>

        <Button 
          type="button" 
          variant="outline" 
          className="w-full" 
          onClick={handleGoogleLogin}
          disabled={isLoading}
        >
          {isLoading ? "Waiting for Google ": "Login with Google"}
        </Button>

        <p className="text-xs text-muted-foreground text-center mt-6">
          Doesn't have an Account? <a href="/register" className="text-primary underline hover:text-primary/90">Register Now</a>
        </p>
      </div>
    </div>
  );
}