import { Checkbox } from "@radix-ui/themes";
import AuthButtonGroup from "./AuthButtonGroup";
import Input from "../../../components/inputs/Input";
import AuthHeading from "./AuthHeading";
import AuthBrand from "./AuthBrand";

function Register() {
  return (
    <div className="w-[40%] px-10 pt-10">
      {/* BRAND SECTION */}
      <AuthBrand />

      <div className="flex flex-col gap-7 p-16 pt-8">
        {/* INFO SECTION */}
        <AuthHeading
          headingText="Sign up to get started"
          subHeadingText="If you already have an account,"
          linkText="Login here!"
        />

        {/* FORM SECTION */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-5">
            <Input label="First name" placeholder="First name" />
            <Input label="Last name" placeholder="Last name" />
          </div>

          <Input label="Email address" placeholder="Email" />

          <div className="flex items-center justify-between gap-5">
            <Input label="Password" placeholder="***" />
            <Input label="Confirm Password" placeholder="***" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox />
              <p className="text-sm">
                you agree to our{" "}
                <span className="cursor-pointer text-blue-600">
                  terms of use
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* BTN GROUPS */}
        <AuthButtonGroup mainBtnText="Get Started" />
      </div>
    </div>
  );
}

export default Register;
