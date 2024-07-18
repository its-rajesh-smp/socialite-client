import { Button } from "@radix-ui/themes";
import { TbPhotoFilled } from "react-icons/tb";
import { IoVideocamOutline } from "react-icons/io5";

function CreatePost() {
  return (
    <div className="grid h-[4.5rem] w-full grid-cols-[2fr_0.2fr_0.2fr] justify-between gap-4 rounded-xl bg-white p-3 shadow-sm">
      <Button className="h-full cursor-pointer rounded-xl bg-[#F1F5F9] text-primary">
        What do you have on your mind?
      </Button>
      <Button className="h-full cursor-pointer rounded-xl bg-[#FDF1F8] text-2xl text-[#DB2777]">
        <TbPhotoFilled />
      </Button>
      <Button className="h-full cursor-pointer rounded-xl bg-[#ECF7FE] text-2xl text-[#0284c7]">
        <IoVideocamOutline />
      </Button>
    </div>
  );
}

export default CreatePost;
