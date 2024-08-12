import { IconType } from "react-icons";
import { IoMdClose } from "react-icons/io";

interface ITagProps {
  isActive: boolean;
  onClick: () => void;
  title?: string;
  icon: any;
  showIcon?: boolean;
  showTitle?: boolean;
  showCloseBtnIcon?: boolean;
  containerClassName?: string;
}

function Tag({
  isActive,
  onClick,
  title,
  icon,
  showIcon,
  showTitle,
  showCloseBtnIcon,
  containerClassName,
}: ITagProps) {
  return (
    <div
      className={`flex h-6 cursor-pointer items-center justify-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-600 transition-all hover:bg-gray-300 ${isActive ? "!bg-gray-300" : ""} ${containerClassName ? containerClassName : ""}`}
      onClick={onClick}
    >
      {showIcon && icon}
      {showTitle && <p className="text-xs">{title}</p>}
      {showCloseBtnIcon && (
        <IoMdClose className="text-gray-9 ml-1 cursor-pointer text-base font-semibold transition-all hover:text-gray-800" />
      )}
    </div>
  );
}

export default Tag;
