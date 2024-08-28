import { Button } from "@radix-ui/themes";

interface IIconButtonProps {
  children: React.ReactNode;
  onClick?: (e: any) => any;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  title?: string;
  size?: "1" | "2" | "3" | "4";
  variant?: "solid" | "soft" | "outline";
  type?: "normal" | "iconButton";
}

function IconButton({
  children,
  onClick,
  loading,
  disabled,
  size = "2",
}: IIconButtonProps) {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      className={`transition-all ${disabled ? "cursor-not-allowed" : "cursor-pointer hover:text-primary"} `}
      color="gray"
      variant="soft"
      loading={loading}
      size={size}
    >
      {children}
    </Button>
  );
}

export default IconButton;
