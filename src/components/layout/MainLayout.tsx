import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

function MainLayout() {
  return (
    <div>
      <Header />
      <div className="p-2">
        <Sidebar />
      </div>
    </div>
  );
}

export default MainLayout;
