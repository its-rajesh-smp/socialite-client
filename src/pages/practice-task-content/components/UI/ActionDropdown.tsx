import { DropdownMenu } from "@radix-ui/themes";
import { AiOutlineDelete } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { CiEdit, CiSaveDown1 } from "react-icons/ci";
import { toast } from "react-toastify";
import DropDownMenu from "../../../../components/others/DropDownMenu";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { setPracticeTaskContentEditable } from "../../../../store/practiceTaskContent/practiceTaskContentActionSlice";

interface IActionDropdownProps {
  onSave: () => void;
}

function ActionDropdown({ onSave }: IActionDropdownProps) {
  const dispatch = useAppDispatch();

  const onClickEdit = () => {
    toast.info("Editing mode enabled");
    dispatch(setPracticeTaskContentEditable(true));
  };

  const onClickSave = () => {
    toast.info("Document is saved");
    dispatch(setPracticeTaskContentEditable(false));
    onSave();
  };

  return (
    <div className="absolute bottom-2 right-2">
      <DropDownMenu
        menuIcon={
          <div className="cursor-pointer rounded-full p-1 transition-all hover:bg-gray-100">
            <BsThreeDots className="text-2xl" />
          </div>
        }
      >
        <DropdownMenu.Item
          onClick={onClickEdit}
          className="flex cursor-pointer items-center gap-2 rounded-md px-4 py-2 text-sm hover:bg-gray-100"
        >
          <CiEdit className="text-xl text-primary" />
          Edit
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onClick={onClickSave}
          className="flex cursor-pointer items-center gap-2 rounded-md px-4 py-2 text-sm hover:bg-gray-100"
        >
          <CiSaveDown1 className="text-xl text-primary" />
          Save
        </DropdownMenu.Item>
        <DropdownMenu.Item className="flex cursor-pointer items-center gap-2 rounded-md px-4 py-2 text-sm hover:bg-gray-100">
          <AiOutlineDelete className="text-xl text-primary" /> Delete
        </DropdownMenu.Item>
      </DropDownMenu>
    </div>
  );
}

export default ActionDropdown;
