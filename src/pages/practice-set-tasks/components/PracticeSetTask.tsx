import Container from "../../../components/containers/Container";
import {
  MdDelete,
  MdOutlineCheck,
  MdHistory,
  MdOutlineBarChart,
} from "react-icons/md";
import { IPracticeQuestion } from "../../../types/practice";

function PracticeSetTask({ description, title, link }: IPracticeQuestion) {
  return (
    <Container>
      <div className="flex items-center justify-between">
        <p className="text-sm">{title}</p>
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
