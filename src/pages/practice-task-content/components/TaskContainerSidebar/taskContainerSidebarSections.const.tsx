import { BiTag } from "react-icons/bi";
import TaskTag from "./UI/TaskTag";

const taskContainerSidebarSections = {
  tags: {
    title: "Tags",
    icon: <BiTag />,
    children: <TaskTag />,
  },
};

export default taskContainerSidebarSections;
