import { useMutation } from "@apollo/client";
import { BiLink } from "react-icons/bi";
import { MdDelete, MdOutlineBarChart, MdOutlineCheck } from "react-icons/md";
import { RxDragHandleDots2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Container from "../../../../components/containers/Container";
import Button from "../../../../components/inputs/Button";
import Chip from "../../../../components/others/Chip";
import { DELETE_PRACTICE_TASK } from "../../../../graphql/practice/practiceTask.graphql";
import { SUBMIT_TASK } from "../../../../graphql/practice/userSubmitTask.graphql";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import authRoutes from "../../../../router/paths/auth.routes";
import {
  deletePracticeSetTask,
  updatePracticeSetTask,
} from "../../../../store/practiceSetTask/slices/practiceSetTaskSlice";
import { IPracticeQuestion } from "../../../../types/practice";
import { getTimeAgo } from "../../../../utils/date";
import { generatePathNameWithParams } from "../../../../utils/route";
import TaskHardnessDot from "./TaskHardnessDot";

function PracticeSetTask({
  title,
  id,
  submittedAt,
  userTaskMetadata,
  questionLink,
  taskTags,
}: IPracticeQuestion) {
  const { editing } = useAppSelector((state) => state.practiceTaskActionSlice);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [mutateDelete] = useMutation(DELETE_PRACTICE_TASK);
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
  const handleDelete = async (e: any) => {
    e.stopPropagation();
    try {
      await mutateDelete({
        variables: {
          id,
        },
      });

      dispatch(deletePracticeSetTask(id));
    } catch (error) {
      console.log(error);
    }
  };

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
    <Container className="cursor-pointer" onClick={handleClick}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {editing && (
            <RxDragHandleDots2 className="cursor-move text-xl text-gray-500" />
          )}

          <TaskHardnessDot isSubmitted={submittedAt} tags={taskTags} />

          <p className="text-sm">{title}</p>
        </div>

        <div className="flex items-center gap-4">
          {submittedAt && (
            <Chip size="1">
              <p>{getTimeAgo(submittedAt)}</p>
            </Chip>
          )}

          {userTaskMetadata?.submissionCount && (
            <div className="flex items-center gap-0.5 text-xs text-gray-500">
              <MdOutlineBarChart />
              <p>{userTaskMetadata?.submissionCount}</p>
            </div>
          )}

          {editing && (
            <Button
              tooltip={true}
              title="Delete"
              onClick={handleDelete}
              color="red"
              type="iconButton"
              variant="ghost"
            >
              <MdDelete />
            </Button>
          )}

          {questionLink && (
            <Button
              onClick={handelQuestionLinkClick}
              tooltip={true}
              title="Question Link"
              color="blue"
              type="iconButton"
              variant="ghost"
            >
              <BiLink />
            </Button>
          )}

          <Button
            onClick={handleSubmit}
            title="Submit"
            tooltip={true}
            color="green"
            type="iconButton"
            variant="ghost"
            loading={submitLoading}
          >
            <MdOutlineCheck />
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default PracticeSetTask;
