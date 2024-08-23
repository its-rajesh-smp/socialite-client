import { useMutation } from "@apollo/client";
import { Checkbox } from "@radix-ui/themes";
import Input from "../../../components/inputs/Input";
import { AuthSteps } from "../../../constants/auth.const";
import { LOGIN_USER } from "../../../graphql/auth/auth.graphql";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { loginSchema } from "../../../schemas/auth.schema";
import { authenticateUser } from "../../../store/auth/authSlice";
import AuthBrand from "./AuthBrand";
import AuthButtonGroup from "./AuthButtonGroup";
import AuthHeading from "./AuthHeading";
import { IAuthFormData } from "../Auth";

interface ILoginProps {
  authData: IAuthFormData;
  setAuthData: React.Dispatch<React.SetStateAction<IAuthFormData>>;
}

function Login({ authData, setAuthData }: ILoginProps) {
  const [mutateLogin] = useMutation(LOGIN_USER);
  const dispatch = useAppDispatch();

  /**
   * Handles the login button click event.
   */
  const onLoginBtnClick = async () => {
    try {
      const authPayload = loginSchema.parse(authData);
      const response = await mutateLogin({
        variables: {
          data: authPayload,
        },
      });
      dispatch(authenticateUser(response.data?.loginUser));
    } catch (error) {}
  };

  return (
    <div className="h-screen w-full px-4 pt-10 md:px-10 lg:w-[40%]">
      {/* BRAND SECTION */}
      <AuthBrand />

      <div className="flex flex-col gap-7 p-5 lg:p-5">
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
              setAuthData((prev: IAuthFormData) => ({
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
              setAuthData((prev: IAuthFormData) => ({
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
                  setAuthData((prev: IAuthFormData) => ({
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
