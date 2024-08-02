import { TextArea } from "@radix-ui/themes";

type InputType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "date"
  | "text-area";

type InputProps = {
  placeholder?: string;
  label?: string;
  inputClassName?: string;
  containerClassName?: string;
  onChange?: (e: any) => void;
  value?: string;
  inputType?: InputType;
};

function Input({
  placeholder,
  label,
  inputClassName = "",
  onChange,
  value,
  inputType = "text",
  containerClassName = "",
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
