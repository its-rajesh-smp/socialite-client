import Container from "../../components/containers/Container";
import CourseModulesContainer from "./components/CourseModulesContainer";
import CourseDetails from "./components/UI/CourseDetails";

function CourseModules() {
  return (
    <Container fullHeight={true} className="flex flex-col gap-4">
      <CourseDetails />
      <CourseModulesContainer />
    </Container>
  );
}

export default CourseModules;
