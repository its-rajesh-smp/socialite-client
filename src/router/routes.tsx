import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Auth from "../pages/auth/Auth";
import Compiler from "../pages/compiler/Compiler";
import CourseContent from "../pages/course-content/CourseContent";
import CourseModules from "../pages/course-modules/CourseModules";
import Courses from "../pages/courses/Courses";
import Error from "../pages/error/Error";
import Feed from "../pages/feed/Feed";
import MyCalendar from "../pages/my-calendar/Calendar";
import PracticeSetTasks from "../pages/practice-set-tasks/PracticeTasks";
import PracticeTaskContent from "../pages/practice-task-content/PracticeTaskContent";
import Practice from "../pages/practice/Practice";
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
