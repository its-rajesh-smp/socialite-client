type InputProps = {
  placeholder?: string;
  label?: string;
  inputClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

function Input({
  placeholder,
  label,
  inputClassName = "",
  onChange,
  value,
}: InputProps) {
  return (
    <div className="flex flex-col gap-3">
      {label && <label className="text-sm font-medium">{label}</label>}
      <input
        onChange={onChange}
        value={value}
        className={`w-full rounded-md border p-1.5 px-3 shadow-sm outline-1 placeholder:font-inter ${inputClassName}`}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
