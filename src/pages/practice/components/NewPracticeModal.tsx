import { useMutation } from "@apollo/client";
import { Dialog, Select, Separator } from "@radix-ui/themes";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import Button from "../../../components/inputs/Button";
import Input from "../../../components/inputs/Input";
import SelectInput from "../../../components/inputs/SelectInput";
import Modal from "../../../components/others/Modal";
import { CREATE_PRACTICE_SET } from "../../../graphql/practice/practiceSet.graphql";
import { IPracticeSet } from "../../../types/practice";
import { Visibility } from "../../../constants/common.const";

interface INewPracticeModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  practiceSets: IPracticeSet[];
  setPracticeSets: React.Dispatch<React.SetStateAction<any>>;
}

// initial practice set input values
const initialPracticeSetInputValue = {
  title: "",
  description: "",
  visibility: Visibility.PUBLIC,
};

function NewPracticeModal({
  open,
  setOpen,
  setPracticeSets,
}: INewPracticeModalProps) {
  const [practiceSetInput, setPracticeSetInput] = useState(
    initialPracticeSetInputValue,
  );

  const [createPracticeSetMutation, { loading: createPracticeSetLoading }] =
    useMutation(CREATE_PRACTICE_SET);

  // function to create a new practice set
  const handelCreatePracticeSet = async (e: any) => {
    e.preventDefault();

    try {
      const data = await createPracticeSetMutation({
        variables: {
          data: practiceSetInput,
        },
      });

      setPracticeSets((prev: any) => [...prev, data.data?.createPracticeSet]);
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal open={open}>
      <Dialog.Title className="flex items-center p-4">
        <p className="w-full text-center font-bold text-primary">
          Create Practice Set
        </p>

        <Button type="iconButton" onClick={() => setOpen(false)}>
          <IoCloseSharp className="cursor-pointer text-2xl" />
        </Button>
      </Dialog.Title>
      <Separator />
      <form className="flex flex-col gap-4 p-4">
        <Input
          value={practiceSetInput.title}
          containerClassName="gap-1"
          label="Practice Set Name"
          placeholder="ex. DSA practice"
          onChange={(e) =>
            setPracticeSetInput((prev) => ({ ...prev, title: e.target.value }))
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
            loading={createPracticeSetLoading}
            onClick={handelCreatePracticeSet}
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
