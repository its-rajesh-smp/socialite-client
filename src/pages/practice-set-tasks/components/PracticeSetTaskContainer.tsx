import { useQuery } from "@apollo/client";
import { useAppSelector } from "../../../hooks/useAppSelector";
import PracticeSetTask from "./PracticeSetTask";
import { GetPracticeSetTasks } from "../../../graphql/practiceSetTask.graphql";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { setPracticeSetTasks } from "../../../store/practiceSetTask/practiceSetTaskSlice";

function PracticeSetTaskContainer() {
  const params = useParams();
  const dispatch = useAppDispatch();

  const practiceSetTasks = useAppSelector(
    (state) => state.practiceSetTaskSlice,
  );

  useQuery(GetPracticeSetTasks, {
    variables: {
      practiceSetId: params.practiceSetId,
    },
    onCompleted: (data) => {
      dispatch(setPracticeSetTasks(data.getAllPracticeTasks));
    },
  });

  return (
    <div className="flex flex-col gap-2">
      {practiceSetTasks.map((practiceSetTask) => (
        <PracticeSetTask key={practiceSetTask.id} {...practiceSetTask} />
      ))}
    </div>
  );
}

export default PracticeSetTaskContainer;
