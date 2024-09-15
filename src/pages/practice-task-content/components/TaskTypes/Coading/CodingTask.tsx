import CodeCompiler from "../../../../../components/compiler/CodeCompiler";
import Container from "../../../../../components/containers/Container";
import CodingTaskActionBar from "./UI/CodingTaskActionBar";

function CodingTask() {
  return (
    <Container>
      <CodeCompiler rightBottomPreviewContent={<CodingTaskActionBar />} />
    </Container>
  );
}

export default CodingTask;
