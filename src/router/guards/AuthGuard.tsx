import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";

const AuthGuard = () => {
  const { isAuthenticated, loadingUser } = useAppSelector(
    (state) => state.authSlice,
  );

  if (loadingUser) {
    return null;
  }

  if (isAuthenticated) {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
};

export default AuthGuard;
