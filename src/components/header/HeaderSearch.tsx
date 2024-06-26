import { IoMdSearch } from "react-icons/io";

function HeaderSearch() {
  return (
    <div className="h-full w-2/4">
      <div className="flex h-full items-center gap-2 rounded-xl bg-[#F1F5F9]">
        <div className="p-3">
          <IoMdSearch className="text-xl text-primary" />
        </div>
        <div className="h-full w-full">
          <input
            className="h-full w-full bg-transparent outline-none placeholder:text-sm placeholder:text-primary"
            type="text"
            placeholder="Search Friends, videos .."
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderSearch;
