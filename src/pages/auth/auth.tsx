import AuthSlider from "./components/AuthSlider";
import Login from "./components/Login";
import Register from "./components/Register";
import { useAppSelector } from "../../hooks/useAppSelector";
import { AuthSteps } from "../../constants/auth.const";

function Auth() {
  const currentAuthStep = useAppSelector(
    (state) => state.authStepSlice.currentStep,
  );

  return (
    <div className="flex h-screen w-full">
      {currentAuthStep === AuthSteps.LOGIN && <Login />}
      {currentAuthStep === AuthSteps.REGISTER && <Register />}
      <AuthSlider />
    </div>
  );
}

export default Auth;
