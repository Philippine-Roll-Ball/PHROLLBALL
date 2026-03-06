import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "@/hook/useAuth";
import { loginUser } from "@/services/apiService";



export default function Login() {
  const { user } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // states for http request
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // kung naka-login na, diretso admin
  // if (user) return <Navigate to="/admin" replace />;

  const handleLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const userData = await loginUser({ email, password});

      console.log("Logged in successfully!", userData);
    } catch (err: any) {
      console.error("Login failed", err);
    }

    // MOCK ONLY – walang validation
    console.log("Logged in with:", email, password);

    // reload para bumalik yung mock user
    // window.location.href = "/admin";
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
            />
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-4">
          Doesn't have an Account? <a href="/register" className="text-primary underline hover:text-primary/90">Register Now</a>
        </p>
      </div>
    </div>
  );
}
