import { Avatar } from "@radix-ui/themes";
import PostDropdown from "./PostDropdown";
import { IUser } from "../../../../types/auth";

function PostHeader({ name, profileImage }: IUser) {
  return (
    <div className="relative flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Avatar
          fallback
          src={
            profileImage ||
            "https://demo.foxthemes.net/socialite-v3.0/assets/images/avatars/avatar-2.jpg"
          }
          radius="full"
        />
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs font-medium text-[#858C97]">23 hours ago</p>
        </div>
      </div>
      <PostDropdown />
    </div>
  );
}

export default PostHeader;
