import React from "react";

function CourseTopicDetails({ description, subtopics }) {
  return (
    <div className="mb-8 ml-9">
      <h1 className="text-3xl">{description}</h1>
    </div>
  );
}

export default CourseTopicDetails;
