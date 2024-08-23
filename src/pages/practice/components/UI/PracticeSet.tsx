import { MdDelete, MdOutlineHistory } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Container from "../../../../components/containers/Container";
import authRoutes from "../../../../router/paths/auth.routes";
import { IPracticeSet } from "../../../../types/practice";
import { generatePathNameWithParams } from "../../../../utils/route";
import { PracticeSetTaskType } from "../../../practice-set-tasks/PracticeTasks";

function PracticeSet({ name, description, id }: IPracticeSet) {
  const navigate = useNavigate();

  /**
   * Function to handle click on practice set
   * @param e - click event
   */
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    navigate(
      generatePathNameWithParams(authRoutes.PRACTICE_SET_TASKS, {
        practiceSetId: id,
        practiceSetTaskType: PracticeSetTaskType.All,
      }),
    );
  };

  return (
    <Container onClick={handleClick} className="flex">
      {/* LEFT SIDE */}
      <div className="flex h-full flex-col justify-between gap-3">
        <div>
          <h3 className="text-xl font-medium">{name}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <div className="flex items-center gap-4">
          <MdDelete className="cursor-pointer text-xl text-red-500 hover:text-red-600" />
          <MdOutlineHistory className="cursor-pointer text-xl text-blue-500 hover:text-blue-600" />
        </div>
      </div>
      {/* RIGHT SIDE PROGRESS CHART */}
      <div className="w-1/2"></div>
    </Container>
  );
}

export default PracticeSet;
