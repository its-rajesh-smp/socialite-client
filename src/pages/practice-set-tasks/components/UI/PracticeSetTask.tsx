import {
  MdDelete,
  MdHistory,
  MdOutlineBarChart,
  MdOutlineCheck,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Container from "../../../../components/containers/Container";
import authRoutes from "../../../../router/paths/auth.routes";
import { IPracticeQuestion } from "../../../../types/practice";
import { generatePathNameWithParams } from "../../../../utils/route";
import { RxDragHandleDots2 } from "react-icons/rx";

function PracticeSetTask({ description, title, link, id }: IPracticeQuestion) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(
      generatePathNameWithParams(authRoutes.PRACTICE_SET_TASK_CONTENT, {
        practiceSetTaskId: id,
      }),
    );
  };

  return (
    <Container onClick={handleClick}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <RxDragHandleDots2 className="cursor-move text-xl text-gray-500" />
          <p className="text-sm">{title}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-0.5 text-xs text-gray-500">
            <MdOutlineBarChart />
            <p>250</p>
          </div>
          <MdDelete className="cursor-pointer text-xl text-red-500 hover:text-red-600" />
          <MdHistory className="cursor-pointer text-xl text-blue-500 hover:text-blue-600" />
          <MdOutlineCheck className="cursor-pointer text-xl text-green-500 hover:text-green-600" />
        </div>
      </div>
    </Container>
  );
}

export default PracticeSetTask;