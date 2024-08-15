import * as Accordion from "@radix-ui/react-accordion";
import Container from "../../../../components/containers/Container";
import CourseModulesContent, { IContent } from "./ModuleContent";

interface ICourseModules {
  name: string;
  id: string;
  triggerTitle: string;
  content: IContent[];
}

function CourseModules({ content, id, name, triggerTitle }: ICourseModules) {
  return (
    <Accordion.Item className="!mt-0" value={id}>
      <Accordion.Header>
        <Accordion.Trigger className="h-full w-full text-left" name={name}>
          <Container className="!bg-blue-50">{triggerTitle}</Container>
        </Accordion.Trigger>
      </Accordion.Header>

      <CourseModulesContent content={content} />
    </Accordion.Item>
  );
}

export default CourseModules;
