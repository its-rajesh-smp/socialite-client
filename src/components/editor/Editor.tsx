import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { Button } from "@radix-ui/themes";

function Editor() {
  const editor = useCreateBlockNote();

  return (
    <div>
      <BlockNoteView editor={editor} />
      <Button
        onClick={() => {
          const blocks = editor.document;
          console.log(blocks);
        }}
      >
        Save
      </Button>
    </div>
  );
}

export default Editor;
