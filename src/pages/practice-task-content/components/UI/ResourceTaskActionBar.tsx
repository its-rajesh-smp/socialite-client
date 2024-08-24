import { Button } from "@radix-ui/themes";
import { GoBug } from "react-icons/go";

function ResourceTaskActionBar() {
  return (
    <div className="flex w-full flex-col gap-2.5 px-5">
      <hr />
      <div className="flex items-center justify-between gap-4">
        <GoBug className="cursor-pointer text-xl text-primary hover:text-blue-500" />
        <Button className="cursor-pointer">Submit</Button>
      </div>
    </div>
  );
}

export default ResourceTaskActionBar;
