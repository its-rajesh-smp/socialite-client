import { Button as RadixButton, Tooltip } from "@radix-ui/themes";
import Loader from "../others/Loader";

export interface IButtonProps {
  children: React.ReactNode;
  onClick?: (e: any) => any;
  className?: string;
  childrenContainerClassName?: string;
  disabled?: boolean;
  loading?: boolean;
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
  title?: string;
  tooltip?: boolean;
}

function Button({
  children,
  onClick,
  loading = false,
  disabled,
  type = "normal",
  color = "blue",
  className = "",
  variant = "solid",
  childrenContainerClassName = "",
  title = "",
  tooltip = false,
}: IButtonProps) {
  let finalClassName = `relative flex items-center justify-center ${className} transition-all ${
    disabled
      ? "cursor-not-allowed"
      : "cursor-pointer opacity-70 hover:opacity-100"
  }`;
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

  const buttonContent = (
    <RadixButton
      disabled={disabled || loading}
      onClick={onClick}
      className={finalClassName}
      color={color}
      variant={variant}
    >
      {loading && <Loader className="absolute text-lg" />}
      <span
        className={`${loading ? "opacity-0" : "opacity-100"} ${childrenContainerClassName}`}
      >
        {children}
      </span>
    </RadixButton>
  );

  if (tooltip && title) {
    return (
      <Tooltip disableHoverableContent={true} content={title}>
        {buttonContent}
      </Tooltip>
    );
  }

  // Return the button without a Tooltip if no valid title or tooltip is false
  return buttonContent;
}

export default Button;
