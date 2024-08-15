import { Button, Dialog, Select, Separator } from "@radix-ui/themes";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import Input from "../../../components/inputs/Input";
import SelectInput from "../../../components/inputs/SelectInput";
import Modal from "../../../components/others/Modal";
import { Visibility } from "../../../constants/feed.const";
import { ICourse } from "./UI/Course";

interface ICourseModal {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  practiceSets: ICourse[];
  setPracticeSets: React.Dispatch<React.SetStateAction<any>>;
}

// initial practice set input values
const initialCourseInputValue = {
  title: "",
  description: "",
  visibility: Visibility.PUBLIC,
};

function NewCourseModal({ open, setOpen }: ICourseModal) {
  const [courseInput, setCourseInput] = useState(initialCourseInputValue);

  // function to create a new course
  const handelCreateCourse = async (e: any) => {
    e.preventDefault();

    try {
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal open={open}>
      <Dialog.Title className="flex items-center p-4">
        <p className="w-full text-center font-bold text-primary">
          Create Course
        </p>

        <Button onClick={() => setOpen(false)}>
          <IoCloseSharp className="cursor-pointer text-2xl" />
        </Button>
      </Dialog.Title>
      <Separator />
      <form className="flex flex-col gap-4 p-4">
        <Input
          value={courseInput.title}
          containerClassName="gap-1"
          label="Course Name"
          placeholder="ex. DSA Course"
          onChange={(e) =>
            setCourseInput((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <Input
          value={courseInput.description}
          containerClassName="gap-1"
          inputType="text-area"
          label="Description"
          placeholder="ex. This is a course for DSA"
          onChange={(e) =>
            setCourseInput((prev) => ({
              ...prev,
              description: e.target.value,
            }))
          }
        />
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <label htmlFor="visibility" className="text-xs">
              Visibility:{" "}
            </label>
            <SelectInput
              className="flex gap-3 rounded-full bg-[#f9fcff] px-2 py-1 text-sm"
              defaultValue={courseInput.visibility}
              onValueChange={(value) =>
                setCourseInput((prev) => ({ ...prev, visibility: value }))
              }
            >
              {Object.entries(Visibility).map(([key, value]) => (
                <Select.Item key={key} value={value}>
                  {value}
                </Select.Item>
              ))}
            </SelectInput>
          </div>
          <Button
            onClick={handelCreateCourse}
            color="blue"
            className="cursor-pointer rounded-md px-2 py-1"
          >
            Create
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default NewCourseModal;
