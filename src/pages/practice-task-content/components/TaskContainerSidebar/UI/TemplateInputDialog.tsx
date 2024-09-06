import { IoClose } from "react-icons/io5";
import Button from "../../../../../components/inputs/Button";
import Input from "../../../../../components/inputs/Input";
import Modal from "../../../../../components/others/Modal";

function TemplateInputDialog() {
  return (
    <Modal open={true}>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-between">
          <p className="text-3xl font-bold">Add Your Fields</p>
          <Button type="iconButton" color="red">
            <IoClose />
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Input containerClassName="!gap-1" label="Template Name" />
          <Input containerClassName="!gap-1" label="Template Name" />
          <Input containerClassName="!gap-1" label="Template Name" />
        </div>
        <Button className="w-fit self-end">Save</Button>
      </div>
    </Modal>
  );
}

export default TemplateInputDialog;
