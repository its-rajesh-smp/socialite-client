import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";

interface IEditor {
  className?: string;
  onChange?: (value: string) => void;
  value?: string;
  editable?: boolean;
}

function Editor({ className, onChange, value, editable = true }: IEditor) {
  const initialContent = JSON.parse(
    value ||
      JSON.stringify([
        {
          type: "paragraph",
          content: "Write your description here...",
        },
      ]),
  );

  const editor = useCreateBlockNote(
    {
      initialContent,
    },
    [value],
  );

  return (
    <BlockNoteView
      editable={editable}
      onChange={() => onChange?.(editor.document as any)}
      className={className}
      editor={editor}
    />
  );
}

export default Editor;
