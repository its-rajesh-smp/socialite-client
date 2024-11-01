import { Outlet } from "react-router-dom";
import PageContainer from "../containers/PageContainer";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

function MainLayout() {
  return (
    <div>
      <Header />
      <div className="flex h-full gap-2 p-2">
        <Sidebar />
        <PageContainer>
          <Outlet />
        </PageContainer>
      </div>
    </div>
  );
}

export default MainLayout;
