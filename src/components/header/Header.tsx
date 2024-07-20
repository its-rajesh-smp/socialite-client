import BrandSection from "./BrandSection";
import HeaderSearch from "./HeaderSearch";
import ActionBar from "./ActionBar";

function Header() {
  return (
    <div className="sticky top-0 z-[100] flex h-[60px] w-full items-center justify-between gap-10 border-b bg-white px-5 py-1.5">
      <BrandSection />
      <div className="flex w-full items-center justify-between pr-5">
        <HeaderSearch />
        <ActionBar />
      </div>
    </div>
  );
}

export default Header;
