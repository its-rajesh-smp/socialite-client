import { Checkbox } from "@radix-ui/themes";
import Input from "../../../components/inputs/Input";
import { AuthSteps } from "../../../constants/auth.const";
import { IAuthData } from "../../../types/auth";
import AuthBrand from "./AuthBrand";
import AuthButtonGroup from "./AuthButtonGroup";
import AuthHeading from "./AuthHeading";

interface IRegisterProps {
  authData: IAuthData;
  setAuthData: React.Dispatch<React.SetStateAction<IAuthData>>;
}

function Register({ authData, setAuthData }: IRegisterProps) {
  const onRegisterBtnClick = () => {};

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
          onClickLinkTextDispatchStep={AuthSteps.LOGIN}
        />

        {/* FORM SECTION */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-5">
            <Input
              onChange={(e) =>
                setAuthData((prev: IAuthData) => ({
                  ...prev,
                  firstName: e.target.value,
                }))
              }
              value={authData.firstName}
              label="First name"
              placeholder="First name"
            />
            <Input
              onChange={(e) =>
                setAuthData((prev: IAuthData) => ({
                  ...prev,
                  lastName: e.target.value,
                }))
              }
              value={authData.lastName}
              label="Last name"
              placeholder="Last name"
            />
          </div>

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

          <div className="flex items-center justify-between gap-5">
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
            <Input
              onChange={(e) =>
                setAuthData((prev: IAuthData) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                }))
              }
              value={authData.confirmPassword}
              label="Confirm Password"
              placeholder="***"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox
                onClick={() => {
                  setAuthData((prev: IAuthData) => ({
                    ...prev,
                    agreeToTerms: !prev.agreeToTerms,
                  }));
                }}
                checked={authData.agreeToTerms}
              />
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
        <AuthButtonGroup
          mainButtonCallback={onRegisterBtnClick}
          mainBtnText="Get Started"
        />
      </div>
    </div>
  );
}

export default Register;
