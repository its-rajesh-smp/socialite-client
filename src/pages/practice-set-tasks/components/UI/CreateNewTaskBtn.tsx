import { Button } from "@radix-ui/themes";
import CreateNewTaskModal from "./CreateNewTaskModal";
import { useState } from "react";

function CreateNewTaskBtn() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CreateNewTaskModal open={open} setOpen={setOpen} />
      <div onClick={() => setOpen(true)} className="fixed bottom-5 right-5">
        <Button className="cursor-pointer">Create New Task</Button>
      </div>
    </>
  );
}

export default CreateNewTaskBtn;
