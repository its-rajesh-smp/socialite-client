import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";

const GuestGuard = () => {
  const { isAuthenticated, loadingUser } = useAppSelector(
    (state) => state.authSlice,
  );

  if (loadingUser) {
    return null;
  }

  if (!isAuthenticated) {
    return <Outlet />;
  }

  return <Navigate to="/feed" />;
};

export default GuestGuard;
