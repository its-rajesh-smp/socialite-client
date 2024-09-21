import { TextArea } from "@radix-ui/themes";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { TagsInput } from "react-tag-input-component";

type InputType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "date"
  | "text-area"
  | "editor"
  | "tag";

type InputProps = {
  placeholder?: string;
  label?: string;
  inputClassName?: string;
  containerClassName?: string;
  onChange?: (e: any) => void;
  value?: string;
  tagValue?: string[];
  inputType?: InputType;
  disabled?: boolean;
};

function Input({
  placeholder,
  label,
  inputClassName = "",
  onChange,
  value,
  inputType = "text",
  containerClassName = "",
  tagValue = [],
  disabled = false,
}: InputProps) {
  switch (inputType) {
    case "text-area":
      return (
        <div className={`${containerClassName} flex w-full flex-col gap-3`}>
          {label && <label className="text-sm font-medium">{label}</label>}
          <TextArea
            onChange={onChange}
            value={value}
            className={`${inputClassName} w-full rounded-md border p-1.5 px-3 shadow-sm outline-1 placeholder:font-inter`}
            placeholder={placeholder}
          />
        </div>
      );

    case "editor":
      return (
        <div className={`${containerClassName} flex w-full flex-col gap-3`}>
          {label && <label className="text-sm font-medium">{label}</label>}
          <ReactQuill
            placeholder={placeholder}
            className={`${inputClassName}`}
            value={value}
            onChange={onChange}
            theme="snow"
          />
        </div>
      );

    case "tag":
      return (
        <div>
          <TagsInput
            value={tagValue}
            onChange={onChange}
            name={label}
            placeHolder={tagValue.length === 0 ? placeholder : ""}
            disabled={disabled}
            classNames={{
              tag: "!bg-black !text-white !p-1 !pl-2 ",
            }}
          />
        </div>
      );

    default:
      return (
        <div className={`${containerClassName} flex w-full flex-col gap-3`}>
          {label && <label className="text-sm font-medium">{label}</label>}
          <input
            onChange={onChange}
            value={value}
            className={`${inputClassName} w-full rounded-md border p-1.5 px-3 shadow-sm outline-1 placeholder:font-inter`}
            placeholder={placeholder}
          />
        </div>
      );
  }
}

export default Input;
