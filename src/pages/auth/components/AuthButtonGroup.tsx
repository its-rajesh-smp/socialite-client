import { Button } from "@radix-ui/themes";
import { FaGoogle } from "react-icons/fa";

type AuthButtonGroupProps = {
  mainBtnText?: string;
  mainButtonCallback?: () => void;
};

function AuthButtonGroup({ mainBtnText }: AuthButtonGroupProps) {
  return (
    <>
      {/* SIGN IN BTN */}
      <Button>{mainBtnText}</Button>
      <div className="flex items-center justify-center">
        <hr className="w-full" />
        <span className="mx-5 w-full text-center text-sm font-semibold">
          Or continue with
        </span>
        <hr className="w-full" />
      </div>

      {/* BTN GROUPS */}
      <div className="flex items-center justify-between">
        <Button className="px-6">
          <FaGoogle /> Google
        </Button>
        <Button className="px-6">
          <FaGoogle /> Facebook
        </Button>
        <Button className="px-6">
          <FaGoogle /> Github
        </Button>
      </div>
    </>
  );
}

export default AuthButtonGroup;
