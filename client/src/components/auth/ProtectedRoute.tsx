import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hook/useAuth";

type ProtectedRouteProps = {
    allowedRoles? : string[];
    children? : React.ReactNode;
};

export default function ProtectedRoute({ allowedRoles, children }: ProtectedRouteProps) {
    const {user, role, loading } = useAuth();

    if(loading) {

        return (
            <div className="min-h-screen flex items-center justify-center bg-muted/30">
            <p className="text-muted-foreground animate-pulse">Verifying credentials...</p>
            </div>
        );

    }

    if (!user) { 
        return <Navigate to="/login" replace />;

    }

    if (allowedRoles && allowedRoles.length > 0) {
        if (!role || !allowedRoles.includes(role)) {
            console.warn(`Access Denied. User role '${role}' is not in allowed list:`, allowedRoles);
            return <Navigate to="/unauthorized" replace />;
        }
    }
    return children ? <> {children } </> : <Outlet />
}