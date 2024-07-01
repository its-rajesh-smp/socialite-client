type InputProps = {
  placeholder?: string;
  label?: string;
  inputClassName?: string;
};

function Input({ placeholder, label, inputClassName = "" }: InputProps) {
  return (
    <div className="flex flex-col gap-3">
      {label && <label className="text-sm font-medium">{label}</label>}
      <input
        className={`placeholder:font-inter w-full rounded-md border p-1.5 px-3 shadow-sm outline-1 ${inputClassName}`}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
