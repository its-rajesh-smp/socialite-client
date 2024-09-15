import { FaRegDotCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { getTaskColorFromTags } from "../../../../utils/color";

function TaskHardnessDot({ tags, isSubmitted }: any) {
  let color = getTaskColorFromTags(tags);
  return (
    <div>
      {isSubmitted ? (
        <FaCircleCheck color={color} />
      ) : (
        <FaRegDotCircle color={color} />
      )}
    </div>
  );
}

export default TaskHardnessDot;
