import * as Accordion from "@radix-ui/react-accordion";
import Container from "../../../../components/containers/Container";
import { BiEdit } from "react-icons/bi";
import {
  MdKeyboardArrowDown,
  MdOutlineAssignmentReturned,
  MdOutlineSave,
} from "react-icons/md";

function PracticeSetDescription() {
  return (
    <Container>
      <Accordion.Root type="single" collapsible>
        <Accordion.Item className="!mt-0" value={"name"}>
          <Accordion.Header>
            <Accordion.Trigger className="flex h-full w-full items-center justify-between text-left">
              <h1 className="text-xl font-bold">Hello</h1>
              <MdKeyboardArrowDown className="cursor-pointer transition-all hover:text-primary" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              voluptas delectus in laboriosam. Iure possimus praesentium
              laudantium animi quos consequatur veniam, libero optio ex vitae
              iste expedita numquam quaerat necessitatibus.
            </div>
            <div className="flex items-center justify-end gap-3">
              <BiEdit className="cursor-pointer text-2xl text-primary transition-all hover:text-blue-500" />
              <MdOutlineSave className="cursor-pointer text-2xl text-primary transition-all hover:text-blue-500" />
              <MdOutlineAssignmentReturned className="cursor-pointer text-2xl text-primary transition-all hover:text-blue-500" />
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </Container>
  );
}

export default PracticeSetDescription;
