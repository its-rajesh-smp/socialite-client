import { BiTag } from "react-icons/bi";
import { TbTemplate } from "react-icons/tb";
import TaskTag from "./UI/TaskTag";
import Template from "./UI/Template";

const taskContainerSidebarSections = {
  tags: {
    title: "Tags",
    icon: <BiTag />,
    children: <TaskTag />,
  },
  templates: {
    title: "Templates",
    icon: <TbTemplate />,
    children: <Template />,
  },
};

export default taskContainerSidebarSections;
