import { BRAND_LOGO } from "../../constants/app.const";

function BrandSection() {
  return (
    <div className="flex w-3/12 items-center gap-2">
      <img className="h-8 w-8" src={BRAND_LOGO} />
      <h1 className="text-xl font-bold text-primary">guideFair.io</h1>
    </div>
  );
}

export default BrandSection;
