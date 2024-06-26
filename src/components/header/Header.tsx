import BrandSection from "./BrandSection";
import HeaderSearch from "./HeaderSearch";
import ActionBar from "./ActionBar";

function Header() {
  return (
    <div className="h-[60px] w-full border-b flex items-center px-5 justify-between  py-1.5 gap-10">
      <BrandSection />
      <div className="flex items-center justify-between w-full pr-5">
        <HeaderSearch />
        <ActionBar />
      </div>
    </div>
  );
}

export default Header;
