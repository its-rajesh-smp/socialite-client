import { Select } from "@radix-ui/themes";

interface SelectInputProps {
  children: React.ReactNode;
  defaultValue?: string;
  className?: string;
}

function SelectInput({ children, defaultValue, className }: SelectInputProps) {
  return (
    <Select.Root defaultValue={defaultValue}>
      <Select.Trigger className={className} />
      <Select.Content>
        <Select.Group>{children}</Select.Group>
      </Select.Content>
    </Select.Root>
  );
}

export default SelectInput;
