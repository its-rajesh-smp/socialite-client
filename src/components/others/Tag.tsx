import { IoMdClose } from "react-icons/io";

interface ITagProps {
  isActive: boolean;
  onClick: () => void;
  title?: string;
}

function Tag({ isActive, onClick, title }: ITagProps) {
  return (
    <div
      className={`flex h-6 cursor-pointer items-center justify-center rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-600 transition-all hover:bg-gray-300 ${isActive ? "!bg-gray-300" : ""}`}
      onClick={onClick}
    >
      <p className="text-xs">{title}</p>
      <IoMdClose className="text-gray-9 ml-1 cursor-pointer text-base font-semibold transition-all hover:text-gray-800" />
    </div>
  );
}

export default Tag;
