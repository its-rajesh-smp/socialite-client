import Container from "../../components/containers/Container";
import UnderConstructionContainer from "../../components/containers/UnderConstructionContainer";
import CourseContainer from "./components/CourseContainer";
import CreateNewCourseBtn from "./components/UI/CreateNewCourseBtn";

function Courses() {
  return (
    <UnderConstructionContainer>
      <Container className="flex flex-col gap-4" fullHeight={true}>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <p className="shrink-0 text-2xl font-semibold">Your Courses</p>
            <hr className="w-full bg-black" />
          </div>
          <CourseContainer />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <p className="shrink-0 text-2xl font-semibold">Others</p>
            <hr className="w-full bg-black" />
          </div>
          <CourseContainer />
        </div>

        <CreateNewCourseBtn practiceSets={[]} setPracticeSets={() => {}} />
      </Container>
    </UnderConstructionContainer>
  );
}

export default Courses;
