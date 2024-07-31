import { Separator } from "@radix-ui/themes";
import Comment from "./UI/Comment";
import { IoIosArrowDown } from "react-icons/io";
import AddNewComment from "./UI/AddNewComment";

interface CommentContainerProps {
  postId: string;
  comments: any[];
}

function CommentContainer({ postId, comments }: CommentContainerProps) {
  return (
    <div className="mt-4 flex flex-col gap-3">
      {comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}

      <div className="flex cursor-pointer items-center gap-2 text-sm font-medium text-gray-500">
        <IoIosArrowDown />
        <p>More Comment</p>
      </div>

      <Separator className="w-full" />

      <AddNewComment postId={postId} />
    </div>
  );
}

export default CommentContainer;
