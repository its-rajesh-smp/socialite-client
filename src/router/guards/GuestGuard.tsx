import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";

const GuestGuard = () => {
  const { isAuthenticated, isLoading } = useAppSelector(
    (state) => state.authSlice,
  );

  if (isLoading) {
    return null;
  }

  if (!isAuthenticated) {
    return <Outlet />;
  }

  return <Navigate to="/feed" />;
};

export default GuestGuard;
