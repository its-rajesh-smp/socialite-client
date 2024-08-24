import { NavLink, useLocation } from "react-router-dom";

type SidebarItemProps = {
  id: number;
  name: string;
  iconImage: string;
  path: string;
};

function SidebarItem({ id, name, iconImage, path }: SidebarItemProps) {
  const location = useLocation();
  let isCurrentTabSelected = location.pathname === path;

  return (
    <NavLink
      to={path}
      id={`${id}`}
      className={`h-12 w-full overflow-hidden ${isCurrentTabSelected && "bg-primary_selected"} flex cursor-pointer items-center gap-5 rounded-xl px-4 py-3 hover:bg-primary_selected`}
    >
      <img className="h-6 w-6" alt={`${name}_icon`} src={iconImage} />{" "}
      <p className={`whitespace-nowrap text-sm font-semibold transition-all`}>
        {name}
      </p>
    </NavLink>
  );
}

export default SidebarItem;
