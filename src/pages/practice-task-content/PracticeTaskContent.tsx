import CodeCompiler from "../../components/compiler/CodeCompiler";
import Container from "../../components/containers/Container";
import CodingTaskActionBar from "./components/UI/CodingTaskActionBar";

function PracticeTaskContent() {
  return (
    <Container fullHeight>
      <CodeCompiler rightBottomPreviewContent={<CodingTaskActionBar />} />
    </Container>
  );
}

export default PracticeTaskContent;
