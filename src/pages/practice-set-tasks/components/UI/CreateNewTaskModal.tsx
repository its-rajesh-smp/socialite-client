import { Button, Dialog, Select, Separator } from "@radix-ui/themes";
import { IoCloseSharp } from "react-icons/io5";
import Modal from "../../../../components/others/Modal";
import Input from "../../../../components/inputs/Input";
import SelectInput from "../../../../components/inputs/SelectInput";
import { Visibility } from "../../../../constants/feed.const";

interface ICreateNewTaskModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function CreateNewTaskModal({ setOpen, open }: ICreateNewTaskModalProps) {
  return (
    <Modal open={open}>
      <Dialog.Title className="flex items-center p-4">
        <p className="w-full text-center font-bold text-primary">
          Create Practice Task
        </p>

        <Button onClick={() => setOpen(false)}>
          <IoCloseSharp className="cursor-pointer text-2xl" />
        </Button>
      </Dialog.Title>
      <Separator />
      <div className="flex flex-col gap-3 p-4">
        <Input containerClassName="!gap-1" placeholder="title" label="Title" />
        <Input containerClassName="!gap-1" placeholder="link" label="Link" />
        <Input
          containerClassName="!gap-1"
          label="Description"
          inputType="editor"
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <label htmlFor="visibility" className="text-xs">
              Visibility:{" "}
            </label>
            <SelectInput
              className="flex gap-3 rounded-full bg-[#f9fcff] px-2 py-1 text-sm"
              defaultValue={Visibility.PUBLIC}
            >
              {Object.entries(Visibility).map(([key, value]) => (
                <Select.Item key={key} value={value}>
                  {value}
                </Select.Item>
              ))}
            </SelectInput>
          </div>
          <Button color="blue" className="cursor-pointer rounded-md px-2 py-1">
            Create
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default CreateNewTaskModal;
