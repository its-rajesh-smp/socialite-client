import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useMutation } from "@apollo/client";
import { Checkbox } from "@radix-ui/themes";
import { CheckCircle2, Link } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SUBMIT_TASK } from "../../../../graphql/practice/userSubmitTask.graphql";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import authRoutes from "../../../../router/paths/auth.routes";
import { updatePracticeSetTask } from "../../../../store/practiceSetTask/slices/practiceSetTaskSlice";
import { IPracticeQuestion } from "../../../../types/practice";
import { generatePathNameWithParams } from "../../../../utils/route";

function PracticeSetTask({
  title,
  id,
  submittedAt,
  // userTaskMetadata,
  questionLink,
  taskTags,
}: IPracticeQuestion) {
  // const { editing } = useAppSelector((state) => state.practiceTaskActionSlice);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const [mutateDelete] = useMutation(DELETE_PRACTICE_TASK);
  const [mutateSubmitResourceTask, { loading: submitLoading }] =
    useMutation(SUBMIT_TASK);

  /**
   * Function to handle click on task
   */
  const handleClick = () => {
    navigate(
      generatePathNameWithParams(authRoutes.PRACTICE_SET_TASK_CONTENT, {
        practiceTaskId: id,
      }),
    );
  };

  /**
   * Function to handle click on delete button
   * @param e  - click event
   */
  // const handleDelete = async (e: any) => {
  //   e.stopPropagation();
  //   try {
  //     await mutateDelete({
  //       variables: {
  //         id,
  //       },
  //     });

  //     dispatch(deletePracticeSetTask(id));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  /**
   * Function to handle click on question link
   */
  const handelQuestionLinkClick = (e: any) => {
    e.stopPropagation();
    if (questionLink) {
      window.open(questionLink, "_blank");
    }
  };

  /**
   * Function to handle submit
   */
  const handleSubmit = async (e: any) => {
    e.stopPropagation();
    const payload = {
      practiceTaskId: id,
      userResponse: "CONFIRM",
      submittedAt: new Date(),
    };
    const response = await mutateSubmitResourceTask({
      variables: {
        data: payload,
      },
    });

    const data = response.data?.submitUserTask;
    dispatch(updatePracticeSetTask(data));
    toast.success("Submitted successfully");
  };

  return (
    <Card onClick={handleClick} key={id} className="border-2 border-gray-200">
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Checkbox id={`task-${id}`} checked={submittedAt ? true : false} />
          <div>
            <label
              htmlFor={`task-${id}`}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {title}
            </label>
            <div className="mt-2 flex flex-wrap gap-2">
              {taskTags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tag.name}
                </Badge>
              ))}
              <Badge className={`text-xs`}>HARD</Badge>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button
            onClick={handelQuestionLinkClick}
            variant="ghost"
            size="icon"
            className="h-8 w-8"
          >
            <Link className="h-4 w-4" />
          </Button>
          <Button
            loading={submitLoading}
            onClick={handleSubmit}
            variant="ghost"
            size="icon"
            className="h-8 w-8"
          >
            <CheckCircle2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default PracticeSetTask;
