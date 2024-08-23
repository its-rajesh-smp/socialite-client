import Course, { ICourseProps } from "./UI/Course";

const data: ICourseProps[] = [
  {
    id: "sdf",
    reviews: 250,
    title: "DSA",
    views: 58889,
  },
  {
    id: "sddsf",
    reviews: 250,
    title: "DSAsdf",
    views: 58889,
  },
  {
    id: "sdsdff",
    reviews: 2507,
    title: "DSAsdf",
    views: 58889,
  },
  {
    id: "sdfsfdf",
    reviews: 250,
    title: "DsdfSA",
    views: 58889,
  },
];

function CourseContainer() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {data.map((course) => (
        <Course key={course.id} {...course} />
      ))}
    </div>
  );
}

export default CourseContainer;
