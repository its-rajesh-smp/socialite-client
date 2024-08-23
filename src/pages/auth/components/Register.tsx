import { useMutation } from "@apollo/client";
import { Checkbox } from "@radix-ui/themes";
import Input from "../../../components/inputs/Input";
import { AuthSteps } from "../../../constants/auth.const";
import { REGISTER_USER } from "../../../graphql/auth/auth.graphql";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { registerSchema } from "../../../schemas/auth.schema";
import { authenticateUser } from "../../../store/auth/authSlice";
import { IAuthFormData } from "../auth";
import AuthBrand from "./AuthBrand";
import AuthButtonGroup from "./AuthButtonGroup";
import AuthHeading from "./AuthHeading";

interface IRegisterProps {
  authData: IAuthFormData;
  setAuthData: React.Dispatch<React.SetStateAction<IAuthFormData>>;
}

function Register({ authData, setAuthData }: IRegisterProps) {
  const dispatch = useAppDispatch();
  const [mutateRegister] = useMutation(REGISTER_USER);

  /**
   * Handles the register button click event.
   */
  const onRegisterBtnClick = async () => {
    try {
      const authPayload = registerSchema.parse(authData);

      const userData = {
        name: `${authPayload.firstName} ${authPayload.lastName}`,
        password: authPayload.password,
        email: authPayload.email,
      };

      const data = await mutateRegister({
        variables: { userData },
      });

      dispatch(authenticateUser(data.data?.register));
    } catch (error) {}
  };

  return (
    <div className="h-screen w-full px-4 pt-10 md:px-10 lg:w-[40%]">
      {/* BRAND SECTION */}
      <AuthBrand />

      <div className="flex flex-col gap-7 p-5 lg:p-5">
        {/* INFO SECTION */}
        <AuthHeading
          headingText="Sign up to get started"
          subHeadingText="If you already have an account,"
          linkText="Login here!"
          onClickLinkTextDispatchStep={AuthSteps.LOGIN}
        />

        {/* FORM SECTION */}
        <div className="flex flex-col gap-4">
          <div className="flex w-full flex-col items-center justify-between gap-5 md:flex-row">
            <Input
              onChange={(e) =>
                setAuthData((prev: IAuthFormData) => ({
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
                setAuthData((prev: IAuthFormData) => ({
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
              setAuthData((prev: IAuthFormData) => ({
                ...prev,
                email: e.target.value,
              }))
            }
            value={authData.email}
            label="Email address"
            placeholder="Email"
          />

          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <Input
              onChange={(e) =>
                setAuthData((prev: IAuthFormData) => ({
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
                setAuthData((prev: IAuthFormData) => ({
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
                  setAuthData((prev: IAuthFormData) => ({
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
