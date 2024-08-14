import Input from "../inputs/Input";

interface INote {
  className?: string;
}

function Note({ className }: INote) {
  return (
    <div className={`${className} bg-white`}>
      <Input
        containerClassName="h-full"
        inputClassName="!h-full"
        inputType="editor"
      />
    </div>
  );
}

export default Note;
