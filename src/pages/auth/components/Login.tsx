import { Checkbox } from "@radix-ui/themes";
import Input from "../../../components/inputs/Input";
import AuthButtonGroup from "./AuthButtonGroup";

function Login() {
  return (
    <div className="w-[40%] px-10 pt-10">
      {/* BRAND SECTION */}
      <div className="flex items-center gap-2">
        <img
          className="h-8 w-8"
          src="https://cdn-icons-png.flaticon.com/512/12459/12459979.png"
        />
        <h1 className="text-xl font-bold text-primary">Socialite</h1>
      </div>

      {/* INFO SECTION */}
      <div className="flex flex-col gap-10 p-16">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Sign in to your account</h1>
          <p className="text-sm font-normal text-gray-700">
            If you haven't signed up yet.{" "}
            <span className="cursor-pointer text-blue-600">Register here!</span>
          </p>
        </div>

        {/* FORM SECTION */}
        <div className="flex flex-col gap-8">
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
