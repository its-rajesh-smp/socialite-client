import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useMutation } from "@apollo/client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Input from "../../../components/inputs/Input";
import { Visibility } from "../../../constants/common.const";
import { CREATE_PRACTICE_SET } from "../../../graphql/practice/practiceSet.graphql";
import { IPracticeSet } from "../../../types/practice";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";

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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Practice Set</DialogTitle>
          <DialogDescription>
            For practice your module you need to create a new practice set.
            Inside that u will be able to create new tasks.
          </DialogDescription>
        </DialogHeader>

        <form className="flex flex-col gap-4">
          <Input
            value={practiceSetInput.title}
            containerClassName="gap-1"
            label="Practice Set Name"
            placeholder="ex. DSA practice"
            onChange={(e) =>
              setPracticeSetInput((prev) => ({
                ...prev,
                title: e.target.value,
              }))
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
            <Select
              defaultValue={practiceSetInput.visibility}
              onValueChange={(value) =>
                setPracticeSetInput((prev) => ({
                  ...prev,
                  visibility: value,
                }))
              }
            >
              <SelectTrigger className="w-fit">
                <SelectValue placeholder="Select visibility" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {Object.entries(Visibility).map(([key, value]) => (
                    <SelectItem key={key} value={value}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Button
              loading={createPracticeSetLoading}
              onClick={handelCreatePracticeSet}
              className="cursor-pointer rounded-md px-2 py-1"
            >
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default NewPracticeModal;
