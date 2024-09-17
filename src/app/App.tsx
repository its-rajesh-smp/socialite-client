import { RouterProvider } from "react-router-dom";
import useFetchUser from "../hooks/useFetchUser";
import Error from "../pages/error/Error";
import Loading from "../pages/loading/Loading";
import appRoutes from "../router/routes";
import "./app.css";

function App() {
  const { loading, error } = useFetchUser();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="h-full w-full bg-primary">
      <RouterProvider router={appRoutes} />
    </div>
  );
}

export default App;
