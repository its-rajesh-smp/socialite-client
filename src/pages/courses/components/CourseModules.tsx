import javascriptLearning from "../data/js";
import CourseTopic from "./CourseTopic";

function CourseModules() {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <h1 className="text-5xl font-semibold">{javascriptLearning.heading}</h1>
        <h2 className="text-xl">{javascriptLearning.subHeading}</h2>
      </div>
      <div>
        {javascriptLearning.topics.map((topic) => {
          return <CourseTopic key={topic.id} {...topic} />;
        })}
      </div>
    </div>
  );
}

export default CourseModules;
