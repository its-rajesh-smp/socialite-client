import { Button } from "@radix-ui/themes";
import { useState } from "react";
import { IPracticeSet } from "../../../../types/practice";
import NewPracticeModal from "../NewPracticeModal";

interface ICreateNewPracticeBtnProps {
  practiceSets: IPracticeSet[];
  setPracticeSets: React.Dispatch<React.SetStateAction<any>>;
}

function CreateNewPracticeBtn(props: ICreateNewPracticeBtnProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <NewPracticeModal {...props} open={open} setOpen={setOpen} />
      <div className="fixed bottom-5 right-5">
        <Button onClick={() => setOpen(true)} className="cursor-pointer">
          Create New Practice
        </Button>
      </div>
    </>
  );
}

export default CreateNewPracticeBtn;
