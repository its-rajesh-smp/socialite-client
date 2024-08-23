import * as Accordion from "@radix-ui/react-accordion";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiDotsSixVertical } from "react-icons/pi";
import Container from "../../../../components/containers/Container";
import ModulesContent, { IContent } from "./ModuleContent";

interface ICourseModuleProps {
  name: string;
  id: string;
  triggerTitle: string;
  content: IContent[];
}

function CourseModule({ content, id, name, triggerTitle }: ICourseModuleProps) {
  return (
    <Accordion.Item className="!mt-0" value={id}>
      <Accordion.Header>
        <Accordion.Trigger className="h-full w-full text-left" name={name}>
          <Container className="flex items-center justify-between !bg-blue-50">
            <div className="flex items-center gap-3">
              <PiDotsSixVertical />
              <p>{triggerTitle}</p>
            </div>
            <div className="text-xl">
              {/* <BiEdit className="cursor-pointer text-primary transition-all hover:text-blue-500" /> */}
              <MdKeyboardArrowDown className="cursor-pointer transition-all hover:text-primary" />
            </div>
          </Container>
        </Accordion.Trigger>
      </Accordion.Header>

      <ModulesContent content={content} />
    </Accordion.Item>
  );
}

export default CourseModule;
