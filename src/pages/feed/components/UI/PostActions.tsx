import { useMutation } from "@apollo/client";
import { Button } from "@radix-ui/themes";
import { useState } from "react";
import { BiSolidCommentDetail } from "react-icons/bi";
import { CiShare1 } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import {
  OperationTypes,
  ReactionTypes,
} from "../../../../constants/feed.const";
import { REACT_POST } from "../../../../graphql/feed/reaction.graphql";

interface IPostActionsProps {
  postId: string;
  isUserLiked?: boolean;
  totalLikeCount?: number;
  totalCommentCount?: number;
}

function PostActions({
  postId,
  totalLikeCount,
  totalCommentCount,
  isUserLiked,
}: IPostActionsProps) {
  const [mutateReaction] = useMutation(REACT_POST);
  const [isLiked, setIsLiked] = useState(isUserLiked);

  const handleReaction = async (reactionType: string) => {
    let operationType = OperationTypes.CREATE;

    // CHECK IF USER ALREADY LIKED
    // IF YES, SET OPERATION TYPE TO DELETE
    if (isLiked) {
      operationType = OperationTypes.DELETE;
    }

    const payload = {
      postId,
      reactionType: reactionType,
      operationType,
    };

    try {
      await mutateReaction({
        variables: {
          data: payload,
        },
      });

      setIsLiked((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-4 flex items-center justify-between">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Button
            onClick={() => handleReaction(ReactionTypes.LIKE)}
            className={`h-8 w-8 cursor-pointer rounded-full bg-red-200 p-0 text-base ${isLiked ? "text-red-500" : "text-gray-600"}`}
          >
            <FaHeart />
          </Button>
          <p className="text-xs font-medium text-[#747B86]">{totalLikeCount}</p>
        </div>

        <div className="flex items-center gap-2">
          <Button className="h-8 w-8 cursor-pointer rounded-full bg-gray-200 p-0 text-base text-gray-600">
            <BiSolidCommentDetail />
          </Button>
          <p className="text-xs font-medium text-[#747B86]">
            {totalCommentCount}
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div>
        <Button className="h-8 w-8 cursor-pointer rounded-full bg-white p-0 text-lg text-gray-600">
          <CiShare1 />
        </Button>
      </div>
    </div>
  );
}

export default PostActions;
