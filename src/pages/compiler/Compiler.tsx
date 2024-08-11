import CodeCompiler from "../../components/compiler/CodeCompiler";
import Container from "../../components/containers/Container";

function Compiler() {
  return (
    <Container fullHeight={true}>
      <CodeCompiler />
    </Container>
  );
}

export default Compiler;
