import { IoMdSearch } from "react-icons/io";

function HeaderSearch() {
  return (
    <div className="h-full w-2/4 ">
      <div className="flex items-center gap-2 bg-[#F1F5F9] h-full  rounded-xl">
        <div className=" p-3">
          <IoMdSearch className=" text-xl text-primary" />
        </div>
        <div className="h-full w-full ">
          <input
            className="bg-transparent h-full w-full outline-none  placeholder:text-sm placeholder:text-primary "
            type="text"
            placeholder="Search Friends, videos .."
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderSearch;
