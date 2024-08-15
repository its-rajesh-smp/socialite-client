import * as Accordion from "@radix-ui/react-accordion";
import { Table } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import { generatePathNameWithParams } from "../../../../utils/route";
import authRoutes from "../../../../router/paths/auth.routes";

export interface IContent {
  id: string;
  name: string;
  icon: string;
  link: string;
  status: string;
  isCompleted: boolean;
}

export interface ICourseModulesContent {
  content: IContent[];
}

function CourseModulesContent({ content }: ICourseModulesContent) {
  const navigate = useNavigate();

  const onContentItemClick = (id: string) => {
    navigate(
      generatePathNameWithParams(authRoutes.COURSES_CONTENT, {
        practiceSetId: id,
      }),
    );
  };

  return (
    <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>id</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>isCompleted</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>icon</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>actions</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {content.map((item) => (
            <Table.Row
              onClick={() => onContentItemClick(item.id)}
              key={item.id}
            >
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.isCompleted}</Table.Cell>
              <Table.Cell>{item.icon}</Table.Cell>
              <Table.Cell>{item.link}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Accordion.Content>
  );
}

export default CourseModulesContent;
