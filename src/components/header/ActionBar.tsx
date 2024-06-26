import { Avatar } from "@radix-ui/themes";
import UserAvatar from "./UserAvatar";
import { FaBell } from "react-icons/fa6";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";

function ActionBar() {
  return (
    <div className="flex items-center gap-3  ">
      <Avatar
        radius="full"
        className=" bg-[#F1F5F9] cursor-pointer"
        fallback={<BsPlusLg className="text-primary text-xl" />}
      />
      <Avatar
        radius="full"
        className=" bg-[#F1F5F9] cursor-pointer"
        fallback={<FaBell className="text-primary text-xl" />}
      />
      <Avatar
        radius="full"
        className="h-9 w-9 bg-[#F1F5F9] cursor-pointer"
        fallback={
          <BiSolidMessageSquareDetail className="text-primary text-xl" />
        }
      />
      <UserAvatar />
    </div>
  );
}

export default ActionBar;
