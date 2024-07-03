import { Checkbox } from "@radix-ui/themes";
import Input from "../../../components/inputs/Input";
import AuthButtonGroup from "./AuthButtonGroup";
import AuthBrand from "./AuthBrand";
import AuthHeading from "./AuthHeading";

function Login() {
  return (
    <div className="w-[40%] px-10 pt-10">
      {/* BRAND SECTION */}
      <AuthBrand />

      <div className="flex flex-col gap-7 p-16">
        {/* INFO SECTION */}
        <AuthHeading
          headingText="Sign in to your account"
          subHeadingText="If you haven’t signed up yet."
          linkText="Register here!"
        />

        {/* FORM SECTION */}
        <div className="flex flex-col gap-4">
          <Input label="Email address" placeholder="Email" />
          <Input label="Password" placeholder="***" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox />
              <span className="text-sm">Remember me</span>
            </div>
            <p className="cursor-pointer text-sm font-semibold text-blue-600">
              Forgot Password
            </p>
          </div>
        </div>

        {/* BTN GROUPS */}
        <AuthButtonGroup mainBtnText="Sign In" />
      </div>
    </div>
  );
}

export default Login;
