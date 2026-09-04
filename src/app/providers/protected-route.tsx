import { useUserStore } from "@/entities/user";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const isAuth = useUserStore((state) => state.isAuth);

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};
