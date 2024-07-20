import { Avatar, Button } from "@radix-ui/themes";
import React from "react";

function AddNewComment() {
  return (
    <div className="flex items-center gap-3">
      <Avatar
        fallback
        src="https://demo.foxthemes.net/socialite-v3.0/assets/images/avatars/avatar-2.jpg"
        radius="full"
        size="1"
        className="cursor-pointer"
      />
      <input
        placeholder="Add a comment...."
        className="w-full rounded-md p-1.5 px-3 outline-none placeholder:text-sm"
      />

      <Button className="cursor-pointer rounded-full bg-[#ECF7FE] text-xs text-[#0284c7]">
        Replay
      </Button>
    </div>
  );
}

export default AddNewComment;
