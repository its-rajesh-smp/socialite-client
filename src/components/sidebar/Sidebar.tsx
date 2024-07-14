import sidebarItemsData from "./SidebarConstant";
import SidebarItem from "./SidebarItem";

function Sidebar() {
  return (
    <div className="flex h-full w-1/6 flex-col gap-2 bg-gray-50">
      {Object.values(sidebarItemsData)
        .filter((item) => item.status === "live")
        .map((item) => (
          <SidebarItem key={item.id} {...item} />
        ))}
    </div>
  );
}

export default Sidebar;
