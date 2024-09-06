import { BsEye } from "react-icons/bs";
import Button from "../../../../../components/inputs/Button";
import TemplateInputDialog from "./TemplateInputDialog";

function Template() {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-2">
        <div className="flex cursor-pointer items-center justify-between rounded-md bg-red-200 p-2">
          <p>DSA Template</p>
          <Button type="iconButton" color="red">
            <BsEye />
          </Button>
        </div>
      </div>
      <Button color="gray" className="w-fit self-center">
        Add current doc as template
      </Button>

      <TemplateInputDialog />
    </div>
  );
}

export default Template;
