import { useState } from "react";
import sidebarItemsData from "./SidebarConstant";
import SidebarItem from "./SidebarItem";

function Sidebar() {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`sticky left-0 top-[68px] flex h-full ${hover ? "w-1/6" : "w-14"} flex-shrink-0 flex-col gap-2 bg-gray-50 transition-all duration-300 ease-in-out`}
    >
      {Object.values(sidebarItemsData)
        .filter((item) => item.status === "live")
        .map((item) => (
          <SidebarItem sidebarOpen={hover} key={item.id} {...item} />
        ))}
    </div>
  );
}

export default Sidebar;
