import Container from "../../../../components/containers/Container";
import Button from "../../../../components/inputs/Button";
import { taskTabs } from "../../../../constants/task.const";
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
        {Object.values(taskTabs).map((tab) => (
          <Button className="!rounded-md">{tab.name}</Button>
        ))}
      </div>
    </Container>
  );
}

export default PracticeTaskTabs;
