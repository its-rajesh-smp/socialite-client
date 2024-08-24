import { useMutation } from "@apollo/client";
import { Button, Dialog, Select, Separator } from "@radix-ui/themes";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";
import Editor from "../../../components/editor/Editor";
import Input from "../../../components/inputs/Input";
import SelectInput from "../../../components/inputs/SelectInput";
import Modal from "../../../components/others/Modal";
import { Visibility } from "../../../constants/feed.const";
import { CREATE_PRACTICE_TASK } from "../../../graphql/practice/practiceTask.graphql";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { addPracticeSetTask } from "../../../store/practiceSetTask/practiceSetTaskSlice";

interface ICreateNewTaskModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialTaskInputValue = {
  title: "",
  description: "",
  visibility: Visibility.PUBLIC,
};

function CreateNewTaskModal({ setOpen, open }: ICreateNewTaskModalProps) {
  const param = useParams();
  const dispatch = useAppDispatch();
  const [taskInput, setTaskInput] = useState(initialTaskInputValue);

  const [mutateCreateSetTask] = useMutation(CREATE_PRACTICE_TASK);

  /**
   * function to create a new task
   * @param e
   */
  const handelCreateTask = async (e: any) => {
    e.preventDefault();
    try {
      const payload = {
        ...taskInput,
        practiceSetId: param.practiceSetId,
      };

      const data = await mutateCreateSetTask({
        variables: {
          data: payload,
        },
      });

      dispatch(addPracticeSetTask(data.data.createPracticeTask));
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal open={open}>
      <Dialog.Title className="flex items-center p-4">
        <p className="w-full text-center font-bold text-primary">
          Create Practice Task
        </p>

        <Button onClick={() => setOpen(false)}>
          <IoCloseSharp className="cursor-pointer text-2xl" />
        </Button>
      </Dialog.Title>
      <Separator />
      <Dialog.Description>
        <form className="flex flex-col gap-3 p-4">
          <Input
            value={taskInput.title}
            onChange={(e) =>
              setTaskInput((prev) => ({ ...prev, title: e.target.value }))
            }
            containerClassName="!gap-1"
            placeholder="title"
            label="Title"
          />

          <div className="small_scrollbar flex h-32 flex-col !gap-1 overflow-y-auto">
            <label className="text-sm font-medium">Description</label>
            <Editor
              onChange={(value) => {
                setTaskInput((prev) => ({
                  ...prev,
                  description: JSON.stringify(value),
                }));
              }}
              className="w-full"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <label htmlFor="visibility" className="text-xs">
                Visibility:{" "}
              </label>
              <SelectInput
                className="flex gap-3 rounded-full bg-[#f9fcff] px-2 py-1 text-sm"
                defaultValue={taskInput.visibility}
                onValueChange={(value) => {
                  setTaskInput((prev) => ({ ...prev, visibility: value }));
                }}
              >
                {Object.entries(Visibility).map(([key, value]) => (
                  <Select.Item key={key} value={value}>
                    {value}
                  </Select.Item>
                ))}
              </SelectInput>
            </div>
            <Button
              onClick={handelCreateTask}
              color="blue"
              className="cursor-pointer rounded-md px-2 py-1"
            >
              Create
            </Button>
          </div>
        </form>
      </Dialog.Description>
    </Modal>
  );
}

export default CreateNewTaskModal;
