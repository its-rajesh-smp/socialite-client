import { IoMdClose } from "react-icons/io";

interface ITag {
  isActive?: boolean;
  onClick?: any;
  title?: string;
  icon?: any;
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
}: ITag) {
  return (
    <div
      className={`flex h-6 cursor-pointer flex-nowrap items-center justify-center gap-2 text-nowrap rounded-full px-3 py-1 text-sm font-semibold text-gray-300 transition-all hover:text-gray-800 ${isActive ? "!text-gray-600" : ""} ${containerClassName ? containerClassName : ""}`}
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
