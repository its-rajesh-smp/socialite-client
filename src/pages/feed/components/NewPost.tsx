import { Button } from "@radix-ui/themes";
import { TbPhotoFilled } from "react-icons/tb";
import { IoVideocamOutline } from "react-icons/io5";
import Container from "../../../components/containers/Container";
import CreatePost from "./UI/CreatePost";
import { useState } from "react";

function NewPost() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container className="grid h-[4.5rem] w-full grid-cols-[2fr_0.2fr_0.2fr] justify-between gap-4">
        <Button
          onClick={() => setOpen(true)}
          className="h-full cursor-pointer rounded-xl bg-[#F1F5F9] text-primary"
        >
          What do you have on your mind?
        </Button>
        <Button className="h-full cursor-pointer rounded-xl bg-[#FDF1F8] text-2xl text-[#DB2777]">
          <TbPhotoFilled />
        </Button>
        <Button className="h-full cursor-pointer rounded-xl bg-[#ECF7FE] text-2xl text-[#0284c7]">
          <IoVideocamOutline />
        </Button>
      </Container>
      <CreatePost open={open} setOpen={setOpen} />
    </>
  );
}

export default NewPost;
