import { Avatar } from "@radix-ui/themes";

function Comment() {
  return (
    <div className="flex gap-3">
      <Avatar
        fallback
        src="https://demo.foxthemes.net/socialite-v3.0/assets/images/avatars/avatar-2.jpg"
        radius="full"
        size="2"
      />
      <div>
        <p className="text-sm font-medium">Rajesh Singha Maha Patra</p>
        <p className="text-xs font-medium text-[#858C97]">
          What a beautiful photo! I love it. 😍 What a beautiful photo! I love
          it. 😍 What a beautiful photo! I love it. 😍 What a beautiful photo! I
          love it. 😍
        </p>
      </div>
    </div>
  );
}

export default Comment;
