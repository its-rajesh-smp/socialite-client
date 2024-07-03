type AuthHeadingProps = {
  linkText?: string;
  headingText?: string;
  subHeadingText?: string;
};

function AuthHeading({
  linkText,
  headingText,
  subHeadingText,
}: AuthHeadingProps) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-semibold">{headingText}</h1>
      <p className="text-sm font-normal text-gray-700">
        {subHeadingText}{" "}
        <span className="cursor-pointer text-blue-600">{linkText}</span>
      </p>
    </div>
  );
}

export default AuthHeading;
