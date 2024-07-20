import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface DropDownProps {
  className?: string;
  menuIcon?: React.ReactNode;
  children?: React.ReactNode;
}

const DropDownMenu = ({ menuIcon, children }: DropDownProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{menuIcon}</DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side="bottom"
          align="end"
          className="data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform]"
          sideOffset={5}
        >
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropDownMenu;
