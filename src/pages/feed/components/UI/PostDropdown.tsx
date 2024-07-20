import DropDownMenu from "../../../../components/others/DropDownMenu";
import { BsThreeDots } from "react-icons/bs";
import { CiBookmark, CiEdit } from "react-icons/ci";
import { MdOutlineReportProblem } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

function PostDropdown() {
  return (
    <DropDownMenu
      menuIcon={
        <div className="cursor-pointer rounded-full p-1 transition-all hover:bg-gray-100">
          <BsThreeDots className="text-2xl" />
        </div>
      }
    >
      <p className="flex cursor-pointer items-center gap-2 rounded-md px-4 py-2 text-sm hover:bg-gray-100">
        <CiEdit className="text-xl text-primary" /> Edit
      </p>
      <p className="flex cursor-pointer items-center gap-2 rounded-md px-4 py-2 text-sm hover:bg-gray-100">
        <AiOutlineDelete className="text-xl text-primary" /> Delete
      </p>
      <p className="flex cursor-pointer items-center gap-2 rounded-md px-4 py-2 text-sm hover:bg-gray-100">
        <CiBookmark className="text-xl text-primary" /> Add to favorites
      </p>
      <p className="flex cursor-pointer items-center gap-2 rounded-md bg-red-100 px-4 py-2 text-sm text-red-500 hover:bg-red-200">
        <MdOutlineReportProblem className="text-xl text-red-500" /> Report this
        post
      </p>
    </DropDownMenu>
  );
}

export default PostDropdown;
