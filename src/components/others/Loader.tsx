import { BiLoader } from "react-icons/bi";

interface ILoaderProps {
  className?: string;
}

function Loader({ className = "" }: ILoaderProps) {
  return <BiLoader className={`animate-spin ${className}`} />;
}

export default Loader;
