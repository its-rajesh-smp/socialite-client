import { useMutation } from "@apollo/client";
import { Avatar, Button } from "@radix-ui/themes";
import { useState } from "react";
import { CREATE_NEW_COMMENT_MUTATION } from "../../../../graphql/feed/comment.graphql";

interface AddNewCommentProps {
  postId: string;
}

function AddNewComment({ postId }: AddNewCommentProps) {
  const [mutateCreateComment] = useMutation(CREATE_NEW_COMMENT_MUTATION);
  const [text, setText] = useState("");

  const handelCreateComment = async () => {
    try {
      const data = await mutateCreateComment({
        variables: {
          createCommentInput: {
            text,
            postId,
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

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
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a comment...."
        className="w-full rounded-md p-1.5 px-3 outline-none placeholder:text-sm"
      />

      <Button
        onClick={handelCreateComment}
        className="cursor-pointer rounded-full bg-[#ECF7FE] text-xs text-[#0284c7]"
      >
        Replay
      </Button>
    </div>
  );
}

export default AddNewComment;
