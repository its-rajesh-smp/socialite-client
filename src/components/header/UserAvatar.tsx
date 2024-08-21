import { Avatar } from "@radix-ui/themes";

interface IUserAvatar {
  src?: string;
}

function UserAvatar({
  src = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
}: IUserAvatar) {
  return (
    <div>
      <Avatar fallback className="h-9 w-9 cursor-pointer" src={src} />
    </div>
  );
}

export default UserAvatar;
