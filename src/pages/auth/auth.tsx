import { useState } from "react";
import { AuthSteps } from "../../constants/auth.const";
import { useAppSelector } from "../../hooks/useAppSelector";
import AuthSlider from "./components/AuthSlider";
import Login from "./components/Login";
import Register from "./components/Register";

export interface IAuthFormData {
  email: string;
  password: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
  agreeToTerms?: boolean;
  rememberUser?: boolean;
}

const initialAuthData: IAuthFormData = {
  email: "",
  password: "",
  agreeToTerms: false,
  confirmPassword: "",
  firstName: "",
  lastName: "",
};

function Auth() {
  const currentAuthStep = useAppSelector(
    (state) => state.authStepSlice.currentStep,
  );
  const [authData, setAuthData] = useState(initialAuthData);

  return (
    <div className="flex w-full flex-col-reverse md:flex-row">
      {currentAuthStep === AuthSteps.LOGIN && (
        <Login authData={authData} setAuthData={setAuthData} />
      )}
      {currentAuthStep === AuthSteps.REGISTER && (
        <Register authData={authData} setAuthData={setAuthData} />
      )}
      <AuthSlider />
    </div>
  );
}

export default Auth;
