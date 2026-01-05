import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

const Auth = () => {
    const token = localStorage.getItem("token");

    // ❌ Not logged in
    if (!token) {
        toast.error("Please login to access this page.");
        return <Navigate to="/login" replace />;
    }

    // ✅ Logged in
    return <Outlet />;
};

export default Auth;