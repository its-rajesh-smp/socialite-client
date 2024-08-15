import { Button } from "@radix-ui/themes";
import { useState } from "react";
import { ICourse } from "../Course";
import NewCourseModal from "../NewCourseModal";

interface ICreateNewCourseBtn {
  practiceSets: ICourse[];
  setPracticeSets: React.Dispatch<React.SetStateAction<any>>;
}

function CreateNewCourseBtn(props: ICreateNewCourseBtn) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <NewCourseModal {...props} open={open} setOpen={setOpen} />
      <div className="fixed bottom-5 right-5">
        <Button onClick={() => setOpen(true)} className="cursor-pointer">
          Create New Course
        </Button>
      </div>
    </>
  );
}

export default CreateNewCourseBtn;
