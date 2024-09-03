import { useMutation } from "@apollo/client";
import { BiCheck, BiCheckbox } from "react-icons/bi";
import {
  MdDelete,
  MdHistory,
  MdOutlineBarChart,
  MdOutlineCheck,
} from "react-icons/md";
import { RxDragHandleDots2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import Container from "../../../../components/containers/Container";
import Chip from "../../../../components/others/Chip";
import { DELETE_PRACTICE_TASK } from "../../../../graphql/practice/practiceTask.graphql";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import authRoutes from "../../../../router/paths/auth.routes";
import { deletePracticeSetTask } from "../../../../store/practiceSetTask/practiceSetTaskSlice";
import { IPracticeQuestion } from "../../../../types/practice";
import { getTimeAgo } from "../../../../utils/date";
import { generatePathNameWithParams } from "../../../../utils/route";

function PracticeSetTask({
  title,
  id,
  submittedAt,
  userTaskMetadata,
}: IPracticeQuestion) {
  const { editing } = useAppSelector((state) => state.practiceTaskActionSlice);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [mutateDelete] = useMutation(DELETE_PRACTICE_TASK);

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

  return (
    <Container className="cursor-pointer" onClick={handleClick}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {editing && (
            <RxDragHandleDots2 className="cursor-move text-xl text-gray-500" />
          )}

          <p className="text-2xl">
            {submittedAt ? <BiCheck /> : <BiCheckbox />}
          </p>

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
            <MdDelete
              onClick={handleDelete}
              className="cursor-pointer text-xl text-red-500 hover:text-red-600"
            />
          )}
          <MdHistory className="cursor-pointer text-xl text-blue-500 hover:text-blue-600" />
          <MdOutlineCheck className="cursor-pointer text-xl text-green-500 hover:text-green-600" />
        </div>
      </div>
    </Container>
  );
}

export default PracticeSetTask;
