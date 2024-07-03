import AuthSlider from "./components/AuthSlider";
import Login from "./components/Login";
import Register from "./components/Register";

function Auth() {
  return (
    <div className="flex h-full w-full">
      <Login />
      {/* <Register /> */}
      <AuthSlider />
    </div>
  );
}

export default Auth;
