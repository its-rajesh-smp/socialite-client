import { useState } from "react";
import { AuthSteps } from "../../constants/auth.const";
import { useAppSelector } from "../../hooks/useAppSelector";
import { IAuthData } from "../../types/auth";
import AuthSlider from "./components/AuthSlider";
import Login from "./components/Login";
import Register from "./components/Register";

const initialAuthDataState: IAuthData = {
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
    <div className="flex h-screen w-full">
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
