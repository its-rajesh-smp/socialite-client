import { IoCloseSharp, IoImage } from "react-icons/io5";
import Modal from "../../../../components/others/Modal";
import { Button, Select, Separator, TextArea } from "@radix-ui/themes";
import SelectInput from "../../../../components/inputs/SelectInput";

interface CreatePostProps {
  open?: boolean;
  setOpen?: () => void;
}

function CreatePost({ open, setOpen }: CreatePostProps) {
  return (
    <Modal open={open}>
      <div className="flex items-center p-4">
        <h2 className="w-full text-center font-bold text-primary">
          Create Post
        </h2>
        <Button>
          <IoCloseSharp className="cursor-pointer text-2xl" />
        </Button>
      </div>
      <Separator />
      <div className="flex flex-col gap-6 p-6">
        <TextArea
          variant="soft"
          className="h-40 border-none text-xl outline-none"
          placeholder="What's on your mind?"
        />

        {/* POST OPTIONS */}
        <div>
          <button className="flex items-center gap-2 rounded-full border border-[#cfecff] bg-[#F0F9FF] px-3 py-1.5 text-sm text-[#2682bf]">
            <IoImage />
            <span>Image</span>
          </button>
        </div>

        {/* POST ACTIONS */}
        <div className="flex items-center justify-between">
          <SelectInput
            className="flex gap-3 rounded-full bg-[#f9fcff] px-2 py-1 text-sm"
            defaultValue="Everyone"
          >
            <Select.Item value="Everyone">Everyone</Select.Item>
            <Select.Item value="Friend Only">Friend only</Select.Item>
            <Select.Item value="Only Me">Only me</Select.Item>
          </SelectInput>

          <Button color="indigo" className="rounded-md px-8 py-1">
            Create
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default CreatePost;
