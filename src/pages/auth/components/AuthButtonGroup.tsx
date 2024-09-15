import { Button } from "@radix-ui/themes";

interface IAuthButtonGroupProps {
  mainBtnText?: string;
  mainButtonCallback?: (e: any) => void;
}

function AuthButtonGroup({
  mainBtnText,
  mainButtonCallback,
}: IAuthButtonGroupProps) {
  return (
    <>
      {/* SIGN IN BTN */}
      <Button onClick={mainButtonCallback}>{mainBtnText}</Button>
      {/* <div className="flex items-center justify-center">
        <hr className="w-1/2 md:w-full" />
        <span className="mx-0 w-full text-center text-xs font-semibold md:mx-5 md:text-sm">
          Or continue with
        </span>
        <hr className="w-1/2 md:w-full" />
      </div> */}

      {/* BTN GROUPS */}
      {/* <div className="flex items-center justify-center gap-5 md:justify-between md:gap-5">
        <Button className="px-6">
          <FaGoogle />
          <span className="hidden md:block">Google</span>
        </Button>
        <Button className="px-6">
          <FaGoogle />
          <span className="hidden md:block">Google</span>
        </Button>
        <Button className="px-6">
          <FaGoogle />
          <span className="hidden md:block">Google</span>
        </Button>
      </div> */}
    </>
  );
}

export default AuthButtonGroup;
