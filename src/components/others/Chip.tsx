import { Badge } from "@radix-ui/themes";

interface IChipProps {
  children?: React.ReactNode;
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
  size?: "1" | "2" | "3";
  className?: string;
  radius?: "small" | "full" | "none" | "medium" | "large";
  variant?: "soft" | "solid" | "surface" | "outline";
  text?: string;
  onClick?: () => void;
}

function Chip({
  className,
  children,
  color = "jade",
  size = "2",
  radius = "full",
  variant = "soft",
  text = "",
  onClick = () => {},
}: IChipProps) {
  return (
    <Badge
      className={`${className} w-fit`}
      size={size}
      color={color}
      variant={variant}
      radius={radius}
      onClick={onClick}
    >
      {text && <p>{text}</p>}
      {children && children}
    </Badge>
  );
}

export default Chip;
