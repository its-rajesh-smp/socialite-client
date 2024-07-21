import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { setAuthStep } from "../../../store/auth/authStepSlice";

type AuthHeadingProps = {
  linkText?: string;
  headingText?: string;
  subHeadingText?: string;
  onClickLinkTextDispatchStep?: number;
};

function AuthHeading({
  linkText,
  headingText,
  subHeadingText,
  onClickLinkTextDispatchStep = 0,
}: AuthHeadingProps) {
  const dispatch = useAppDispatch();

  const onClickLinkText = () => {
    dispatch(setAuthStep(onClickLinkTextDispatchStep));
  };

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-semibold">{headingText}</h1>
      <p className="text-sm font-normal text-gray-700">
        {subHeadingText}{" "}
        <span
          onClick={onClickLinkText}
          className="cursor-pointer text-blue-600"
        >
          {linkText}
        </span>
      </p>
    </div>
  );
}

export default AuthHeading;
