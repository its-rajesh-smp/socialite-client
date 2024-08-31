import { Button as RadixButton } from "@radix-ui/themes";
import Loader from "../others/Loader";

interface IButtonProps {
  children: React.ReactNode;
  onClick?: (e: any) => any;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  title?: string;
  variant?: "outline" | "classic" | "solid" | "soft" | "surface" | "ghost";
  type?: "normal" | "iconButton";
}

function Button({
  children,
  onClick,
  loading = false,
  disabled,
  type = "normal",
}: IButtonProps) {
  switch (type) {
    case "iconButton":
      return (
        <RadixButton
          disabled={disabled || loading}
          onClick={onClick}
          variant="solid"
          className={`relative flex items-center justify-center rounded-md p-1 transition-all ${disabled ? "cursor-not-allowed" : "cursor-pointer opacity-70 hover:opacity-100"} `}
          color="blue"
        >
          {loading && <Loader className="absolute text-lg" />}
          <span className={`${loading ? "opacity-0" : "opacity-100"}`}>
            {children}
          </span>
        </RadixButton>
      );

    case "normal":
      return (
        <RadixButton
          disabled={disabled || loading}
          onClick={onClick}
          className={`relative flex items-center justify-center rounded-sm px-2 transition-all ${disabled ? "cursor-not-allowed" : "cursor-pointer opacity-70 hover:opacity-100"} `}
          color="blue"
        >
          {loading && <Loader className="absolute text-lg" />}
          <span className={`${loading ? "opacity-0" : "opacity-100"}`}>
            {children}
          </span>
        </RadixButton>
      );
  }
}

export default Button;
