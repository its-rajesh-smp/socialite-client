import Container from "../../components/containers/Container";
import CourseModules from "./components/UI/CourseModules";
import CreateNewCourseBtn from "./components/UI/CreateNewCourseBtn";

function Courses() {
  return (
    <Container fullHeight={true}>
      <CourseModules />
      <CreateNewCourseBtn practiceSets={[]} setPracticeSets={() => {}} />
    </Container>
  );
}

export default Courses;
