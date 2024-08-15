import Module from "./UI/CourseModule";
import * as Accordion from "@radix-ui/react-accordion";

const data = [
  {
    name: "Module 1",
    id: "sdjfhsdf",
    triggerTitle: "Trigger 1",
    content: [
      {
        id: "sdfsdf",
        name: "Hosting",
        icon: "https://cdn-icons-png.flaticon.com/512/12459/12459979.png",
        link: "www.google.com",
        status: "live",
        isCompleted: true,
        content: "Hosting",
      },
      {
        id: "1",
        name: "Cloud",
        icon: "https://cdn-icons-png.flaticon.com/512/12459/12459979.png",
        link: "www.google.com",
        status: "live",
        isCompleted: true,
        content: "Docker",
      },
    ],
  },
  {
    name: "Module 2",
    id: "1",
    triggerTitle: "Trigger 30",
    content: [
      {
        id: "0",
        name: "PAP",
        icon: "https://cdn-icons-png.flaticon.com/512/12459/12459979.png",
        link: "www.google.com",
        status: "live",
        isCompleted: true,
        content: "DUMMY",
      },
      {
        id: "1",
        name: "AWS",
        icon: "https://cdn-icons-png.flaticon.com/512/12459/12459979.png",
        link: "www.google.com",
        status: "live",
        isCompleted: true,
        content: "C++",
      },
    ],
  },
];

function CourseModulesContainer() {
  return (
    <Accordion.Root
      type="multiple"
      className="flex h-full w-full flex-col gap-3"
    >
      {data.map((module) => (
        <Module key={module.id} {...module} />
      ))}
    </Accordion.Root>
  );
}

export default CourseModulesContainer;
