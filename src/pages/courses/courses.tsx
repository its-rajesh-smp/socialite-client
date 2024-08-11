import Container from "../../components/containers/Container";
import CourseModules from "./components/CourseModules";

function Courses() {
  return (
    <Container className="h-[calc(100vh-80px)]">
      <CourseModules />
    </Container>
  );
}

export default Courses;
