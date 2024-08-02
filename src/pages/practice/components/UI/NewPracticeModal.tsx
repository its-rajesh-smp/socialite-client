import { Button, Dialog, Select, Separator } from "@radix-ui/themes";
import Modal from "../../../../components/others/Modal";
import { IoCloseSharp } from "react-icons/io5";
import Input from "../../../../components/inputs/Input";
import SelectInput from "../../../../components/inputs/SelectInput";
import { Visibility } from "../../../../constants/feed.const";
import { IPracticeSet } from "../../../../types/practice";
import { useState } from "react";

interface NewPracticeModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  practiceSets: IPracticeSet[];
  setPracticeSets: React.Dispatch<React.SetStateAction<any>>;
}

const initialPracticeSetInputValue = {
  name: "",
  description: "",
  visibility: Visibility.PUBLIC,
};

function NewPracticeModal({
  open,
  setOpen,
  practiceSets,
  setPracticeSets,
}: NewPracticeModalProps) {
  const [practiceSetInput, setPracticeSetInput] = useState(
    initialPracticeSetInputValue,
  );

  const handelCreatePracticeSet = (e: any) => {
    e.preventDefault();
    console.log(practiceSetInput);
  };

  return (
    <Modal open={open}>
      <Dialog.Title className="flex items-center p-4">
        <p className="w-full text-center font-bold text-primary">
          Create Practice Set
        </p>

        <Button onClick={() => setOpen(false)}>
          <IoCloseSharp className="cursor-pointer text-2xl" />
        </Button>
      </Dialog.Title>
      <Separator />
      <form className="flex flex-col gap-4 p-4">
        <Input
          value={practiceSetInput.name}
          containerClassName="gap-1"
          label="Practice Set Name"
          placeholder="ex. DSA practice"
          onChange={(e) =>
            setPracticeSetInput((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <Input
          value={practiceSetInput.description}
          containerClassName="gap-1"
          inputType="text-area"
          label="Description"
          placeholder="ex. This is a practice set for DSA"
          onChange={(e) =>
            setPracticeSetInput((prev) => ({
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
              defaultValue={practiceSetInput.visibility}
              onValueChange={(value) =>
                setPracticeSetInput((prev) => ({ ...prev, visibility: value }))
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
            onClick={handelCreatePracticeSet}
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

export default NewPracticeModal;
