import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_ALL_PRACTICE_TASKS } from "../../../graphql/practice/practiceTask.graphql";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { setPracticeSetTasks } from "../../../store/practiceSetTask/practiceSetTaskSlice";
import PracticeSetTask from "./PracticeSetTask";

function PracticeSetTaskContainer() {
  const params = useParams();
  const dispatch = useAppDispatch();

  const practiceSetTasks = useAppSelector(
    (state) => state.practiceSetTaskSlice,
  );

  // Fetching practice set tasks
  useQuery(GET_ALL_PRACTICE_TASKS, {
    variables: {
      data: {
        PracticeSetId: params.practiceSetId,
        practiceSetTaskType: params.practiceSetTaskType,
      },
    },
    onCompleted: (data) => {
      dispatch(setPracticeSetTasks(data.getAllPracticeTasks));
    },
  });

  return (
    <div className="flex flex-col gap-2">
      {practiceSetTasks.length === 0 && (
        <p className="text-center text-sm">No tasks found</p>
      )}
      {practiceSetTasks.map((practiceSetTask) => (
        <PracticeSetTask key={practiceSetTask.id} {...practiceSetTask} />
      ))}
    </div>
  );
}

export default PracticeSetTaskContainer;
