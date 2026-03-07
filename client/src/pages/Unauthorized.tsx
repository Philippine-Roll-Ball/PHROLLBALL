import { Link } from "react-router-dom";
import  { Button } from "@/components/ui/button";

export default function Unauthorized() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-muted/30 p-4">
      <h1 className="text-4xl font-bold text-destructive mb-4">Access Denied</h1>
      <p className="text-muted-foreground mb-8">
        You do not have the required permissions to view this page.
      </p>
      <Link to="/login">
        <Button>Return to Login</Button>
      </Link>
    </div>
    );
}