import { NavLink, useLocation } from "react-router-dom";

type SidebarItemProps = {
  id: number;
  name: string;
  iconImage: string;
  path: string;
  sidebarOpen: boolean;
};

function SidebarItem({
  id,
  name,
  iconImage,
  path,
  sidebarOpen,
}: SidebarItemProps) {
  const location = useLocation();
  let isCurrentTabSelected = location.pathname === path;

  return (
    <NavLink
      to={path}
      id={`${id}`}
      className={`h-12 w-full ${isCurrentTabSelected && "bg-primary_selected"} flex cursor-pointer items-center gap-2 rounded-xl px-4 py-3 hover:bg-primary_selected`}
    >
      <img className="h-6 w-6" alt={`${name}_icon`} src={iconImage} />{" "}
      <p
        className={`text-sm font-semibold ${sidebarOpen ? "block" : "hidden"} transition-all`}
      >
        {name}
      </p>
    </NavLink>
  );
}

export default SidebarItem;
