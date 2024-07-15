// import Courses from "../../pages/courses/courses";
import Feed from "../../pages/feed/feed";
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
          {/* <Courses /> */}
          <Feed />
        </PageContainer>
      </div>
    </div>
  );
}

export default MainLayout;
