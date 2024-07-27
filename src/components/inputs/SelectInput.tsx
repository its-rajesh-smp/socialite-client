import { Select } from "@radix-ui/themes";

interface SelectInputProps {
  children: React.ReactNode;
  defaultValue?: string;
  className?: string;
  onValueChange?: (value: string) => void;
}

function SelectInput({
  children,
  defaultValue,
  className,
  onValueChange = () => {},
}: SelectInputProps) {
  return (
    <Select.Root
      onValueChange={(value) => onValueChange(value)}
      defaultValue={defaultValue}
    >
      <Select.Trigger className={className} />
      <Select.Content>
        <Select.Group>{children}</Select.Group>
      </Select.Content>
    </Select.Root>
  );
}

export default SelectInput;
