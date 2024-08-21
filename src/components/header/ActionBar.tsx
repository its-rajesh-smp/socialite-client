import { Avatar } from "@radix-ui/themes";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { FaBell } from "react-icons/fa6";
import UserAvatar from "./UserAvatar";

function ActionBar() {
  return (
    <div className="flex items-center gap-3">
      <Avatar
        radius="full"
        className="cursor-pointer bg-[#F1F5F9]"
        fallback={<BsPlusLg className="text-xl text-primary" />}
      />
      <Avatar
        radius="full"
        className="cursor-pointer bg-[#F1F5F9]"
        fallback={<FaBell className="text-xl text-primary" />}
      />
      <Avatar
        radius="full"
        className="h-9 w-9 cursor-pointer bg-[#F1F5F9]"
        fallback={
          <BiSolidMessageSquareDetail className="text-xl text-primary" />
        }
      />
      <UserAvatar />
    </div>
  );
}

export default ActionBar;
