import { FaCamera } from "react-icons/fa";

function UploadUserStatus() {
  return (
    <div className="border-[#cbd5e1; ] flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-2 border-dashed border-slate-400 bg-[#e2e8f0]">
      <FaCamera className="text-xl text-slate-600" />
    </div>
  );
}

export default UploadUserStatus;
