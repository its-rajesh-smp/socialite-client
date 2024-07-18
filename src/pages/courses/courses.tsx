import Container from "../../components/containers/Container";
import Course from "./components/Course";
import CourseModules from "./components/CourseModules";
import AllAvailableCourses from "./CourseConstant";

function Courses() {
  return (
    <Container className="">
      <div className="grid grid-cols-3 justify-center gap-5 p-3">
        {/* {AllAvailableCourses.map((course) => {
          return <Course key={course.id} {...course} />;
        })} */}
        <CourseModules />
      </div>
    </Container>
  );
}

export default Courses;
