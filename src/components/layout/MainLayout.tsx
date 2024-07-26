// import Courses from "../../pages/courses/courses";
import { RouterProvider } from "react-router-dom";
import PageContainer from "../containers/PageContainer";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import privateRoutes from "../../router/privateRoutes";

function MainLayout() {
  return (
    <div>
      <Header />
      <div className="flex h-full gap-2 p-2">
        <Sidebar />
        <PageContainer>
          <RouterProvider router={privateRoutes} />
        </PageContainer>
      </div>
    </div>
  );
}

export default MainLayout;
