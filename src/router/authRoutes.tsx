import { createBrowserRouter } from "react-router-dom";
import Auth from "../pages/auth/auth";

const authRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/register",
    element: <Auth />,
  },
]);

export default authRoutes;
