import { Button, IconButton as RadixIconButton } from "@radix-ui/themes";

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
  size = "2",
}: IIconButtonProps) {
  return (
    <Button
      onClick={onClick}
      className="cursor-pointer transition-all hover:text-primary"
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
