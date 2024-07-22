import { useState } from "react";
import { AuthSteps } from "../../constants/auth.const";
import { useAppSelector } from "../../hooks/useAppSelector";
import { IAuthFormData } from "../../types/auth";
import AuthSlider from "./components/AuthSlider";
import Login from "./components/Login";
import Register from "./components/Register";

const initialAuthDataState: IAuthFormData = {
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

  const [authData, setAuthData] = useState(initialAuthDataState);

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
