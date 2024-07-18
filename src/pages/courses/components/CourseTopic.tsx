import { Checkbox } from "@radix-ui/themes";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import CourseSubTopic from "./CourseSubTopic";
import CourseTopicDetails from "./CourseTopicDetails";

function CourseTopic({ id, title, description, subtopics }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div id={`${id}`} className="">
      <div className="flex items-center gap-5">
        <Checkbox />
        <h3 className="text-2xl">{title}</h3>
        <FaChevronDown
          className={`cursor-pointer transition-all ${expanded ? "rotate-180" : ""}`}
          onClick={() => setExpanded((prev) => !prev)}
        />
      </div>
      {expanded && (
        <CourseTopicDetails description={description} subtopics={subtopics} />
      )}
    </div>
  );
}

export default CourseTopic;
