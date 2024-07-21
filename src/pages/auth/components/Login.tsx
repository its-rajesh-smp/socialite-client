import { Checkbox } from "@radix-ui/themes";
import Input from "../../../components/inputs/Input";
import { AuthSteps } from "../../../constants/auth.const";
import { IAuthData } from "../../../types/auth";
import AuthBrand from "./AuthBrand";
import AuthButtonGroup from "./AuthButtonGroup";
import AuthHeading from "./AuthHeading";

interface ILoginProps {
  authData: IAuthData;
  setAuthData: React.Dispatch<React.SetStateAction<IAuthData>>;
}

function Login({ authData, setAuthData }: ILoginProps) {
  const onLoginBtnClick = () => {};

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
          onClickLinkTextDispatchStep={AuthSteps.REGISTER}
        />

        {/* FORM SECTION */}
        <div className="flex flex-col gap-4">
          <Input
            onChange={(e) =>
              setAuthData((prev: IAuthData) => ({
                ...prev,
                email: e.target.value,
              }))
            }
            value={authData.email}
            label="Email address"
            placeholder="Email"
          />
          <Input
            onChange={(e) =>
              setAuthData((prev: IAuthData) => ({
                ...prev,
                password: e.target.value,
              }))
            }
            value={authData.password}
            label="Password"
            placeholder="***"
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox
                onChange={() =>
                  setAuthData((prev: IAuthData) => ({
                    ...prev,
                    rememberUser: !prev.rememberUser,
                  }))
                }
                checked={authData.rememberUser}
              />
              <span className="text-sm">Remember me</span>
            </div>
            <p className="cursor-pointer text-sm font-semibold text-blue-600">
              Forgot Password
            </p>
          </div>
        </div>

        {/* BTN GROUPS */}
        <AuthButtonGroup
          mainButtonCallback={onLoginBtnClick}
          mainBtnText="Sign In"
        />
      </div>
    </div>
  );
}

export default Login;
