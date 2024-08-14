import Editor from "../editor/Editor";
import Input from "../inputs/Input";

interface INote {
  className?: string;
}

function Note({ className }: INote) {
  return (
    <div className={`${className} bg-white`}>
      <Editor />
    </div>
  );
}

export default Note;
