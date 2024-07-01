import AuthSlider from "./components/AuthSlider";
import Login from "./components/Login";

function Auth() {
  return (
    <div className="flex h-full w-full">
      <Login />
      <AuthSlider />
    </div>
  );
}

export default Auth;
