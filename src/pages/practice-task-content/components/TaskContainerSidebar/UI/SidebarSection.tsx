interface ISidebarSectionProps {
  title: string;
  icon: JSX.Element;
  children: JSX.Element;
}

function SidebarSection({ children, icon, title }: ISidebarSectionProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex items-center gap-2 text-xl font-semibold text-primary">
        {icon}
        <p>{title}</p>
      </div>
      {children}
    </div>
  );
}

export default SidebarSection;
