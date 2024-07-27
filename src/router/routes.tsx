import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Auth from "../pages/auth/auth";
import Courses from "../pages/courses/courses";
import Error from "../pages/error/error";
import Feed from "../pages/feed/feed";
import AuthGuard from "./guards/AuthGuard";
import GuestGuard from "./guards/GuestGuard";
import guestRoutes from "./paths/guest.routes";
import authRoutes from "./paths/auth.routes";

const appRoutes = createBrowserRouter([
  // # GUEST ROUTES
  {
    path: "/",
    element: <GuestGuard />,
    errorElement: <Error />,
    children: [
      {
        path: guestRoutes.LOGIN,
        element: <Auth />,
      },
      {
        path: guestRoutes.REGISTER,
        element: <Auth />,
      },
      {
        path: "/",
        element: <Navigate to={guestRoutes.LOGIN} />,
      },
    ],
  },
  // # AUTH ROUTES
  {
    path: "/",
    element: <AuthGuard />,
    errorElement: <Error />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: authRoutes.FEED,
            element: <Feed />,
          },
          {
            path: authRoutes.COURSES,
            element: <Courses />,
          },
          {
            path: "/",
            element: <Navigate to={authRoutes.FEED} />,
          },
        ],
      },
    ],
  },
]);

export default appRoutes;