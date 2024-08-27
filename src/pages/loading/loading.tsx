import { BiLoaderCircle } from "react-icons/bi";

function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <BiLoaderCircle className="animate-spin text-5xl" />
    </div>
  );
}

export default Loading;
