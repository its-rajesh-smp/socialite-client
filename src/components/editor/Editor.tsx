import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { useEffect } from "react";

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
          content: "Welcome to this demo!",
        },
      ]),
  );

  const editor = useCreateBlockNote({
    initialContent,
  });

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
