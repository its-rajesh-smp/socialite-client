import { RouterProvider } from "react-router-dom";
import useFetchUser from "../hooks/useFetchUser";
import appRoutes from "../router/routes";
import Loading from "../pages/loading/loading";
import Error from "../pages/error/error";

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
