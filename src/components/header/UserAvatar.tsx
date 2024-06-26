import { Avatar } from "@radix-ui/themes";

function UserAvatar() {
  return (
    <div>
      <Avatar
        fallback
        className="h-9 w-9 cursor-pointer"
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
      />
    </div>
  );
}

export default UserAvatar;
