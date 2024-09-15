import { generatePath, Navigate, Outlet } from "react-router-dom";
import { practiceTabs } from "../../constants/practice.const";
import { useAppSelector } from "../../hooks/useAppSelector";
import authRoutes from "../paths/auth.routes";

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

  return (
    <Navigate
      to={generatePath(authRoutes.PRACTICE, {
        practiceTabSlug: practiceTabs.all.slug,
      })}
    />
  );
};

export default GuestGuard;
