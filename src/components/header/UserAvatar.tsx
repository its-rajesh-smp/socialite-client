import { Avatar } from "@radix-ui/themes";
import { BiUser } from "react-icons/bi";

interface IUserAvatar {
  src?: string;
  type?: "icon" | "image";
}

function UserAvatar({
  src = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  type = "icon",
}: IUserAvatar) {
  switch (type) {
    case "image":
      return (
        <div>
          <Avatar fallback className="h-9 w-9 cursor-pointer" src={src} />
        </div>
      );
    case "icon":
      return (
        <div className="flex h-9 w-9 cursor-pointer items-center justify-center">
          <BiUser className="text-xl" />
        </div>
      );
  }
}

export default UserAvatar;
