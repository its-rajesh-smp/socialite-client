type SidebarItemProps = {
  selected?: boolean;
  id: number;
  name: string;
  iconImage: string;
};

function SidebarItem({ selected, id, name, iconImage }: SidebarItemProps) {
  return (
    <div
      id={`${id}`}
      className={`h-12 w-full ${selected && "bg-primary_selected"} flex cursor-pointer items-center gap-2 rounded-xl px-4 py-3 hover:bg-primary_selected`}
    >
      <img className="h-6 w-6" alt={`${name}_icon`} src={iconImage} />{" "}
      <p className="text-sm font-semibold">{name}</p>
    </div>
  );
}

export default SidebarItem;
