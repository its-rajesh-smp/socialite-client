import { useMutation } from "@apollo/client";
import { Dialog, Select, Separator } from "@radix-ui/themes";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";
import Button from "../../../components/inputs/Button";
import Input from "../../../components/inputs/Input";
import SelectInput from "../../../components/inputs/SelectInput";
import TagInput from "../../../components/inputs/TagInput";
import Modal from "../../../components/others/Modal";
import { Visibility } from "../../../constants/feed.const";
import { taskTypes } from "../../../constants/task.const";
import { CREATE_PRACTICE_TASK } from "../../../graphql/practice/practiceTask.graphql";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { addPracticeSetTask } from "../../../store/practiceSetTask/slices/practiceSetTaskSlice";
import { ITaskTag } from "../../../types/practice";

interface ICreateNewTaskModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialTaskInputValue = {
  title: "",
  visibility: Visibility.PUBLIC,
  taskType: taskTypes.LINK,
  questionLink: null,
};

function CreateNewTaskModal({ setOpen, open }: ICreateNewTaskModalProps) {
  const param = useParams();
  const dispatch = useAppDispatch();
  const [taskInput, setTaskInput] = useState(initialTaskInputValue);
  const [createPracticeTaskMutation, { loading: createTaskLoading }] =
    useMutation(CREATE_PRACTICE_TASK);
  const [tags, setTags] = useState<ITaskTag[]>([]);

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
        taskTags: tags.map((tag) => ({ name: tag.name, id: tag.id })),
      };

      const data = await createPracticeTaskMutation({
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

        <Button type="iconButton" onClick={() => setOpen(false)}>
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

          {taskInput.taskType === taskTypes.LINK && (
            <Input
              containerClassName="!gap-1"
              placeholder="Add your question's link"
              label="Link"
              value={taskInput?.questionLink || ""}
              onChange={(e) =>
                setTaskInput((prev) => ({
                  ...prev,
                  questionLink: e.target.value,
                }))
              }
            />
          )}

          <TagInput
            label="Tags"
            placeholder="Choose or create tags"
            setTags={setTags}
            tags={tags}
          />

          <div className="flex items-center justify-between">
            <div className="flex flex-row gap-3">
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
              <div className="flex items-center gap-1">
                <label htmlFor="taskType" className="text-xs">
                  Task Type:{" "}
                </label>
                <SelectInput
                  className="flex gap-3 rounded-full bg-[#f9fcff] px-2 py-1 text-sm"
                  defaultValue={taskTypes.LINK}
                  onValueChange={(value) => {
                    setTaskInput((prev) => ({ ...prev, taskType: value }));
                  }}
                >
                  {Object.entries(taskTypes).map(([key, value]) => (
                    <Select.Item key={key} value={value}>
                      {value}
                    </Select.Item>
                  ))}
                </SelectInput>
              </div>
            </div>
            <Button loading={createTaskLoading} onClick={handelCreateTask}>
              Create
            </Button>
          </div>
        </form>
      </Dialog.Description>
    </Modal>
  );
}

export default CreateNewTaskModal;
