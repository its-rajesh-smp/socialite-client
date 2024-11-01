import { useAppDispatch } from "../../hooks/useAppDispatch";
import { toggleSidebar } from "../../store/sidebar/sidebarSlice";
import sidebarItems from "./SidebarConstant";
import SidebarItem from "./SidebarItem";

function Sidebar() {
  const dispatch = useAppDispatch();

  return (
    <div
      onMouseEnter={() => dispatch(toggleSidebar())}
      onMouseLeave={() => dispatch(toggleSidebar())}
      className={`sticky left-0 top-[68px] flex h-[calc(100vh-80px)] w-14 flex-shrink-0 flex-col justify-between gap-2 bg-gray-50 transition-all duration-300 ease-in-out hover:w-1/6`}
    >
      <div>
        {Object.values(sidebarItems)
          .filter((item) => item.status === "live")
          .map((item) => (
            <SidebarItem key={item.id} {...item} />
          ))}
      </div>
      <div>{/* <SidebarItem {...sidebarItems.blogs} /> */}</div>
    </div>
  );
}

export default Sidebar;
