import { Button } from "@radix-ui/themes";
import Container from "../../../../components/containers/Container";

function PracticeSetTabs() {
  return (
    <Container className="flex justify-between">
      <div className="flex gap-5">
        <Button>All</Button>
        <Button>My Creations</Button>
        <Button>Assigned To Me</Button>
      </div>
      <div>
        <Button>Practice Today</Button>
      </div>
    </Container>
  );
}

export default PracticeSetTabs;
