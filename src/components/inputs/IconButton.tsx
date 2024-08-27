import { IconButton as RadixIconButton } from "@radix-ui/themes";

interface IIconButtonProps {
  children: React.ReactNode;
  onClick?: (e: any) => Promise<void>;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  title?: string;
  size?: "1" | "2" | "3" | "4";
  variant?: "solid" | "soft" | "outline";
}

function IconButton({
  children,
  onClick,
  loading,
  size = "2",
}: IIconButtonProps) {
  return (
    <RadixIconButton
      onClick={onClick}
      className="cursor-pointer text-2xl transition-all hover:text-primary"
      color="gray"
      variant="soft"
      loading={loading}
      size={size}
    >
      {children}
    </RadixIconButton>
  );
}

export default IconButton;
