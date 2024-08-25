import { NavLink, useLocation } from "react-router-dom";
import { generatePathNameWithParams } from "../../utils/route";

type SidebarItemProps = {
  id: number;
  name: string;
  iconImage: string;
  path: string;
  params?: Record<string, string>;
};

function SidebarItem({ id, name, iconImage, path, params }: SidebarItemProps) {
  const location = useLocation();

  // Removing dynamic params from the path
  const basePath = path.split("/:")[0];
  // Getting the current base path
  const currentBasePath = location.pathname.split("/")[1];
  // Check if the current path matches the base path
  const isCurrentTabSelected = basePath === `/${currentBasePath}`;
  // Generating the full path with dynamic params
  const fullPath = generatePathNameWithParams(path, params);

  return (
    <NavLink
      to={fullPath}
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
