import { Button } from "@radix-ui/themes";
import { BiSolidCommentDetail } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";

function PostActions() {
  return (
    <div className="mt-4 flex items-center justify-between">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Button className="h-8 w-8 cursor-pointer rounded-full bg-red-200 p-0 text-base text-red-500">
            <FaHeart />
          </Button>
          <p className="text-xs font-medium text-[#747B86]">1,000</p>
        </div>

        <div className="flex items-center gap-2">
          <Button className="h-8 w-8 cursor-pointer rounded-full bg-gray-200 p-0 text-base text-gray-600">
            <BiSolidCommentDetail />
          </Button>
          <p className="text-xs font-medium text-[#747B86]">1,000</p>
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
