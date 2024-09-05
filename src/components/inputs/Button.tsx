import { Button as RadixButton } from "@radix-ui/themes";
import Loader from "../others/Loader";

export interface IButtonProps {
  children: React.ReactNode;
  onClick?: (e: any) => any;
  className?: string;
  childrenContainerClassName?: string;
  disabled?: boolean;
  loading?: boolean;
  title?: string;
  variant?: "outline" | "classic" | "solid" | "soft" | "surface" | "ghost";
  type?: "normal" | "iconButton";
  color?:
    | "gray"
    | "gold"
    | "bronze"
    | "brown"
    | "yellow"
    | "amber"
    | "orange"
    | "tomato"
    | "red"
    | "ruby"
    | "crimson"
    | "pink"
    | "plum"
    | "purple"
    | "violet"
    | "iris"
    | "indigo"
    | "blue"
    | "cyan"
    | "teal"
    | "jade"
    | "green"
    | "grass"
    | "lime"
    | "mint"
    | "sky";
}

function Button({
  children,
  onClick,
  loading = false,
  disabled,
  type = "normal",
  color = "blue",
  className = "",
  childrenContainerClassName = "",
}: IButtonProps) {
  let finalClassName = `relative flex items-center justify-center ${className} transition-all ${disabled ? "cursor-not-allowed" : "cursor-pointer opacity-70 hover:opacity-100"}`;
  switch (type) {
    case "iconButton":
      finalClassName += ` rounded-md p-1 text-2xl  `;
      break;
    case "normal":
      finalClassName += ` rounded-sm px-3 py-1 `;
      break;
    default:
      finalClassName += `rounded-sm px-3 py-1 `;
      break;
  }

  return (
    <RadixButton
      disabled={disabled || loading}
      onClick={onClick}
      className={finalClassName}
      color={color}
    >
      {loading && <Loader className="absolute text-lg" />}
      <span
        className={`${loading ? "opacity-0" : "opacity-100"} ${childrenContainerClassName}`}
      >
        {children}
      </span>
    </RadixButton>
  );
}

export default Button;
