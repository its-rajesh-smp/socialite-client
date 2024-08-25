import { MdDelete, MdOutlineHistory } from "react-icons/md";
import Container from "../../../../components/containers/Container";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { IPracticeSet } from "../../../../types/practice";

function PracticeSet({
  id,
  name,
  description,
  user,
  onPracticeSetClick,
  onPracticeSetDelete,
}: IPracticeSet) {
  const authenticatedUser = useAppSelector((state) => state.authSlice);
  const isEditable = user?.id === authenticatedUser?.id;

  /**
   * Function to handle click on practice set
   * @param e - click event
   */
  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onPracticeSetClick?.(id);
  };

  /**
   * Function to handle delete of practice set
   * @param e - click event
   */
  const onDelete = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onPracticeSetDelete?.(id);
  };

  return (
    <Container onClick={(e: any) => onClick(e)} className="flex">
      {/* LEFT SIDE */}
      <div className="flex h-full flex-col justify-between gap-3">
        <div>
          <h3 className="text-xl font-medium">{name}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <div className="flex items-center gap-4">
          {isEditable && (
            <MdDelete
              onClick={(e: any) => onDelete(e)}
              className="cursor-pointer text-xl text-red-500 hover:text-red-600"
            />
          )}
          <MdOutlineHistory className="cursor-pointer text-xl text-blue-500 hover:text-blue-600" />
        </div>
      </div>
      {/* RIGHT SIDE PROGRESS CHART */}
      <div className="w-1/2"></div>
    </Container>
  );
}

export default PracticeSet;
