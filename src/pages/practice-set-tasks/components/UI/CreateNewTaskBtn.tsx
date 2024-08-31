import { Button } from "@radix-ui/themes";
import { useState } from "react";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import CreateNewTaskModal from "../CreateNewTaskModal";

function CreateNewTaskBtn() {
  const authenticatedUser = useAppSelector((state) => state.authSlice);
  const currentPracticeSet = useAppSelector(
    (state) => state.practiceSetTaskSlice.currentPracticeSet,
  );
  const [open, setOpen] = useState(false);

  return (
    currentPracticeSet?.user?.id === authenticatedUser?.id && (
      <>
        <CreateNewTaskModal open={open} setOpen={setOpen} />
        <div onClick={() => setOpen(true)} className="fixed bottom-5 right-5">
          <Button className="cursor-pointer">Create New Task</Button>
        </div>
      </>
    )
  );
}

export default CreateNewTaskBtn;
