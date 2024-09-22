import SelectInput from "@/components/inputs/SelectInput";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SelectItem } from "@/components/ui/select";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../../../components/inputs/Input";
import TagInput from "../../../components/inputs/TagInput";
import { Visibility } from "../../../constants/common.const";
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Practice Task</DialogTitle>
          <DialogDescription>
            For practice your module you need to create a new practice set.
            Inside that u will be able to create new tasks.
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-3">
          <Input
            value={taskInput.title}
            onChange={(e) =>
              setTaskInput((prev) => ({ ...prev, title: e.target.value }))
            }
            placeholder="title"
            label="Title"
          />

          {taskInput.taskType === taskTypes.LINK && (
            <Input
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
            <div className="flex w-full flex-row justify-between gap-3">
              <SelectInput
                label="Visibility"
                defaultValue={taskInput.visibility}
                onValueChange={(value) => {
                  setTaskInput((prev) => ({ ...prev, visibility: value }));
                }}
              >
                {Object.entries(Visibility).map(([key, value]) => (
                  <SelectItem key={key} value={value}>
                    {value}
                  </SelectItem>
                ))}
              </SelectInput>

              <SelectInput
                label="Type"
                defaultValue={taskTypes.LINK}
                onValueChange={(value) => {
                  setTaskInput((prev) => ({ ...prev, taskType: value }));
                }}
              >
                {Object.entries(taskTypes).map(([key, value]) => (
                  <SelectItem key={key} value={value}>
                    {value}
                  </SelectItem>
                ))}
              </SelectInput>
            </div>
          </div>
          <Button loading={createTaskLoading} onClick={handelCreateTask}>
            Create
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default CreateNewTaskModal;
