import { RouterProvider } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import authRoutes from "../router/authRoutes";
import { useAppSelector } from "../hooks/useAppSelector";
import { useEffect } from "react";
import useFetchUser from "../hooks/useFetchUser";

function App() {
  const { isAuthenticated } = useAppSelector((state) => state.authSlice);

  useFetchUser();

  return (
    <div className="h-full w-full bg-primary">
      {!isAuthenticated && <RouterProvider router={authRoutes} />}
      {isAuthenticated && <MainLayout />}
    </div>
  );
}

export default App;
