import { Button } from "@radix-ui/themes";
import Container from "../../../components/containers/Container";

function PracticeSetTabs() {
  return (
    <Container className="flex gap-5">
      <Button>Current</Button>
      <Button>All</Button>
    </Container>
  );
}

export default PracticeSetTabs;
