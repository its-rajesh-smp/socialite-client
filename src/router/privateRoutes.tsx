import { createBrowserRouter } from "react-router-dom";
import Feed from "../pages/feed/feed";

const privateRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Feed />,
  },
]);

export default privateRoutes;
