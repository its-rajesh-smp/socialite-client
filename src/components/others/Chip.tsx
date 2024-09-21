import { Badge, BadgeProps } from "../ui/badge";

interface IChipProps extends BadgeProps {
  children?: React.ReactNode;
  text?: string;
  onClick?: () => void;
  closeBtn;
}

function Chip({
  className,
  children,
  color = "gray",
  variant = "default",
  text = "",
  onClick = () => {},
}: IChipProps) {
  return (
    <Badge
      className={`${className} w-fit`}
      color={color}
      variant={variant}
      onClick={onClick}
    >
      {text && <p>{text}</p>}
      {children && children}
    </Badge>
  );
}

export default Chip;
