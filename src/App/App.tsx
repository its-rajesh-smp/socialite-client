import { RouterProvider } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import authRoutes from "../router/authRoutes";

function App() {
  return (
    <div className="h-full w-full bg-primary">
      <RouterProvider router={authRoutes} />
      {/* <MainLayout /> */}
    </div>
  );
}

export default App;
