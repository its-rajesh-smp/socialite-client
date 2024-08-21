import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";

interface IEditor {
  className?: string;
  onChange?: (value: string) => void;
  value?: string;
}

function Editor({ className, onChange, value }: IEditor) {
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
      onChange={() => onChange?.(editor.document as any)}
      className={className}
      editor={editor}
    />
  );
}

export default Editor;
