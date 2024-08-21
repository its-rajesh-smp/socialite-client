import * as Dialog from "@radix-ui/react-dialog";

interface IModal {
  children?: React.ReactNode;
  className?: string;
  open?: boolean;
}

const Modal = ({ children, className, open }: IModal) => (
  <Dialog.Root open={open}>
    <Dialog.Portal>
      <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 backdrop-blur-sm" />
      <Dialog.Content
        className={`data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[550px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none ${className}`}
      >
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Modal;
