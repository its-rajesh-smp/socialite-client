import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
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
      <Button icon={<BiPlus />} onClick={() => setOpen(true)}>
        <p>Create New Practice</p>
      </Button>
    </>
  );
}

export default CreateNewPracticeBtn;
