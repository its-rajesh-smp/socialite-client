import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
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
        <Button icon={<BiPlus />} onClick={() => setOpen(true)}>
          Create New Task
        </Button>
      </>
    )
  );
}

export default CreateNewTaskBtn;
