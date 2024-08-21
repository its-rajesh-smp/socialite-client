interface IDescription {
  className?: string;
}

function Description({ className }: IDescription) {
  return (
    <div className={`${className} bg-white`}>
      <iframe
        className="h-full w-full"
        src="https://docs.google.com/document/d/1t6Ye-_MifbNGatr39wLw53K90iC1NpipVQmrq5FSasw/pub?embedded=true"
      ></iframe>
    </div>
  );
}

export default Description;
