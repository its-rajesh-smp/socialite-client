import { createBrowserRouter, generatePath, Navigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout.tsx";
import { practiceTabs } from "../constants/practice.const.ts";
import Auth from "../pages/auth/Auth.tsx";
import Error from "../pages/error/Error.tsx";
import PracticeSetTasks from "../pages/practice-set-tasks/PracticeTasks.tsx";
import PracticeTaskContent from "../pages/practice-task-content/PracticeTaskContent.tsx";
import Practice from "../pages/practice/Practice.tsx";
import AuthGuard from "./guards/AuthGuard";
import GuestGuard from "./guards/GuestGuard";
import authRoutes from "./paths/auth.routes";
import guestRoutes from "./paths/guest.routes";

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
            path: authRoutes.PRACTICE,
            element: <Practice />,
          },
          {
            path: authRoutes.PRACTICE_SET_TASKS,
            element: <PracticeSetTasks />,
          },
          {
            path: authRoutes.PRACTICE_SET_TASK_CONTENT,
            element: <PracticeTaskContent />,
          },
          {
            path: "/",
            element: (
              <Navigate
                to={generatePath(authRoutes.PRACTICE, {
                  practiceTabSlug: practiceTabs.all.slug,
                })}
              />
            ),
          },
        ],
      },
    ],
  },
]);

export default appRoutes;
