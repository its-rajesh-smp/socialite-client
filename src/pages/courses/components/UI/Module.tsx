import Container from "../../../../components/containers/Container";
import ModuleContent, { IContent } from "./ModuleContent";
import * as Accordion from "@radix-ui/react-accordion";

interface IModule {
  name: string;
  id: string;
  triggerTitle: string;
  content: IContent[];
}

function Module({ content, id, name, triggerTitle }: IModule) {
  return (
    <Accordion.Item className="!mt-0" value={id}>
      <Accordion.Header>
        <Accordion.Trigger className="h-full w-full text-left" name={name}>
          <Container className="!bg-blue-50">{triggerTitle}</Container>
        </Accordion.Trigger>
      </Accordion.Header>

      <ModuleContent content={content} />
    </Accordion.Item>
  );
}

export default Module;
