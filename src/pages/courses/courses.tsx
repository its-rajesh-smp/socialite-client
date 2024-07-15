import Container from "../../components/containers/Container";
import Course from "./components/Course";
import AllAvailableCourses from "./CourseConstant";

function Courses() {
  return (
    <Container className="">
      <div className="grid grid-cols-3 gap-5 p-3">
        {AllAvailableCourses.map((course) => {
          return <Course key={course.id} {...course} />;
        })}
      </div>
    </Container>
  );
}

export default Courses;
