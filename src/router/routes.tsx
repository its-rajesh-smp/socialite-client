import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout.tsx";
import Auth from "../pages/auth/Auth.tsx";
import Compiler from "../pages/compiler/Compiler.tsx";
import CourseContent from "../pages/course-content/CourseContent.tsx";
import CourseModules from "../pages/course-modules/CourseModules.tsx";
import Courses from "../pages/courses/Courses.tsx";
import Error from "../pages/error/Error.tsx";
import Feed from "../pages/feed/Feed.tsx";
import MyCalendar from "../pages/my-calendar/Calendar.tsx";
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
            path: authRoutes.FEED,
            element: <Feed />,
          },
          {
            path: authRoutes.COURSES,
            element: <Courses />,
          },
          {
            path: authRoutes.COURSES_MODULE,
            element: <CourseModules />,
          },
          {
            path: authRoutes.COURSES_CONTENT,
            element: <CourseContent />,
          },
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
            path: authRoutes.COMPILER,
            element: <Compiler />,
          },
          {
            path: authRoutes.MY_CALENDAR,
            element: <MyCalendar />,
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
