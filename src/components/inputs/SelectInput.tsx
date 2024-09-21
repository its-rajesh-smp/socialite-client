import { SelectProps } from "@radix-ui/react-select";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface ISelectInput extends SelectProps {
  children: React.ReactNode;
  defaultValue?: string;
  className?: string;
  onValueChange?: (value: any) => void;
  selectTriggerClassName?: string;
  label?: string;
  labelClassName?: string;
}

function SelectInput({
  children,
  defaultValue,
  onValueChange = () => {},
  className = "",
  selectTriggerClassName = "",
  label,
  labelClassName,
}: ISelectInput) {
  return (
    <div className="flex w-full flex-col gap-3">
      {label && (
        <label className={`text-sm font-medium ${labelClassName}`}>
          {label}
        </label>
      )}
      <Select defaultValue={defaultValue} onValueChange={onValueChange}>
        <SelectTrigger className={`${selectTriggerClassName}`}>
          <SelectValue placeholder="Select visibility" />
        </SelectTrigger>
        <SelectContent className={className}>{children}</SelectContent>
      </Select>
    </div>
  );
}

export default SelectInput;
