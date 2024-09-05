import { BiEdit, BiSave } from "react-icons/bi";
import { toast } from "react-toastify";
import Button from "../../../../../components/inputs/Button";
import { useAppDispatch } from "../../../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../../../hooks/useAppSelector";
import { updatePracticeTask } from "../../../../../store/practiceSetTask/actions/resourceTaskAction";
import { setPracticeTaskContentEditable } from "../../../../../store/practiceTaskContent/practiceTaskContentActionSlice";

function EditTaskAction() {
  const isEditing = useAppSelector(
    (state) => state.practiceTaskContentActionSlice.isContentEditable,
  );
  const dispatch = useAppDispatch();

  const onClickEdit = () => {
    toast.info("Editing mode enabled");
    dispatch(setPracticeTaskContentEditable(true));
  };

  const onClickSave = () => {
    dispatch(setPracticeTaskContentEditable(false));
    dispatch(updatePracticeTask());
    toast.info("Document is saved");
  };

  return (
    <Button
      color={isEditing ? "green" : "blue"}
      className="!h-fit w-full"
      childrenContainerClassName="w-full overflow-hidden"
      type="iconButton"
      onClick={isEditing ? onClickSave : onClickEdit}
    >
      <div className="flex w-full items-center gap-5">
        {isEditing ? (
          <>
            <BiSave className="flex-shrink-0 text-3xl" />
            <p>Save</p>
          </>
        ) : (
          <>
            <BiEdit className="flex-shrink-0 text-3xl" />
            <p>Edit</p>
          </>
        )}
      </div>
    </Button>
  );
}

export default EditTaskAction;
