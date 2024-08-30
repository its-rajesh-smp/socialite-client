import { Avatar } from "@radix-ui/themes";
import { IComment } from "../../../../types/feed";

function Comment({ user, text }: IComment) {
  return (
    <div className="flex gap-3">
      <Avatar
        fallback
        src="https://demo.foxthemes.net/socialite-v3.0/assets/images/avatars/avatar-2.jpg"
        radius="full"
        size="2"
      />
      <div>
        <p className="text-sm font-medium">{user.name}</p>
        <p className="text-xs font-medium text-[#858C97]">{text}</p>
      </div>
    </div>
  );
}

export default Comment;
