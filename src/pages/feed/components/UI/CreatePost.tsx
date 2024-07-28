import { IoCloseSharp, IoImage } from "react-icons/io5";
import Modal from "../../../../components/others/Modal";
import { Button, Dialog, Select, Separator, TextArea } from "@radix-ui/themes";
import SelectInput from "../../../../components/inputs/SelectInput";
import { Visibility } from "../../../../constants/feed.const";
import { INewPostFormData } from "../../../../types/feed";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_FEED_POST_MUTATION } from "../../../../graphql/feed.graphql";

interface CreatePostProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialNewPostFormData: INewPostFormData = {
  text: "",
  visibility: Visibility.PUBLIC,
};

function CreatePost({ open, setOpen }: CreatePostProps) {
  const [newPostFormData, setNewPostFormData] = useState(
    initialNewPostFormData,
  );
  const [mutateCreatePost] = useMutation(CREATE_FEED_POST_MUTATION);

  const handelCreatePost = async () => {
    try {
      const data = await mutateCreatePost({
        variables: {
          createPostInput: newPostFormData,
        },
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal open={open}>
      <Dialog.Title className="flex items-center p-4">
        <p className="w-full text-center font-bold text-primary">Create Post</p>

        <Button onClick={() => setOpen(false)}>
          <IoCloseSharp className="cursor-pointer text-2xl" />
        </Button>
      </Dialog.Title>
      <Separator />
      <div className="flex flex-col gap-6 p-6">
        <TextArea
          variant="soft"
          className="h-40 border-none text-xl outline-none"
          placeholder="What's on your mind?"
          onChange={(e) => {
            setNewPostFormData((prev) => ({ ...prev, text: e.target.value }));
          }}
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
            onValueChange={(value) =>
              setNewPostFormData((prev) => ({ ...prev, visibility: value }))
            }
            className="flex gap-3 rounded-full bg-[#f9fcff] px-2 py-1 text-sm"
            defaultValue={Visibility.PUBLIC}
          >
            {Object.entries(Visibility).map(([key, value]) => (
              <Select.Item key={key} value={value}>
                {value}
              </Select.Item>
            ))}
          </SelectInput>

          <Button
            onClick={handelCreatePost}
            color="indigo"
            className="rounded-md px-8 py-1"
          >
            Create
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default CreatePost;
