import { Button } from "@radix-ui/themes";
import Container from "../../../../components/containers/Container";
import PracticeTasksTabsSkeleton from "./PracticeTasksTabsSkeleton";

interface IPracticeTaskTabs {
  loading?: boolean;
}

function PracticeTaskTabs({ loading }: IPracticeTaskTabs) {
  if (loading) {
    return <PracticeTasksTabsSkeleton />;
  }

  return (
    <Container className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Button>All</Button>
        <Button>Completed</Button>
        <Button>Remaining</Button>
      </div>
      <div className="flex items-center gap-5">
        <Button>Revision</Button>
      </div>
    </Container>
  );
}

export default PracticeTaskTabs;
