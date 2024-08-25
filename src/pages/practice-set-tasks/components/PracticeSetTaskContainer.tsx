import { useAppSelector } from "../../../hooks/useAppSelector";
import PracticeSetTask from "./UI/PracticeSetTask";

function PracticeSetTaskContainer() {
  const practiceSetTasks = useAppSelector(
    (state) => state.practiceSetTaskSlice,
  );

  return (
    <div className="flex flex-col gap-2">
      {practiceSetTasks.practiceTasks.length === 0 && (
        <p className="text-center text-sm">No tasks found</p>
      )}
      {practiceSetTasks.practiceTasks.map((practiceSetTask) => (
        <PracticeSetTask key={practiceSetTask.id} {...practiceSetTask} />
      ))}
    </div>
  );
}

export default PracticeSetTaskContainer;
