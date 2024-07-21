import { useMutation } from "@apollo/client";
import { Checkbox } from "@radix-ui/themes";
import Input from "../../../components/inputs/Input";
import { AuthSteps } from "../../../constants/auth.const";
import { LOGIN_USER_MUTATION } from "../../../graphql/auth.graphql";
import { IAuthFormData } from "../../../types/auth";
import { DTO, validateWithDTO } from "../../../utils/validateWithDTO";
import AuthBrand from "./AuthBrand";
import AuthButtonGroup from "./AuthButtonGroup";
import AuthHeading from "./AuthHeading";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { authenticateUser } from "../../../store/auth/authSlice";

interface ILoginProps {
  authData: IAuthFormData;
  setAuthData: React.Dispatch<React.SetStateAction<IAuthFormData>>;
}

const loginDTO: Record<string, DTO> = {
  email: {
    req: true,
    operations: ["trim", "toString", "lowerCase", "minLength(3)"],
  },
  password: {
    req: true,
    operations: ["trim"],
  },
};

function Login({ authData, setAuthData }: ILoginProps) {
  const [mutateLogin] = useMutation(LOGIN_USER_MUTATION);
  const dispatch = useAppDispatch();

  const onLoginBtnClick = async () => {
    const userPayload = validateWithDTO(loginDTO, authData, {
      deleteUnneededProperties: true,
    });

    const data = await mutateLogin({
      variables: {
        loginUserData: userPayload,
      },
    });

    dispatch(authenticateUser(data.data?.login));
  };

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
