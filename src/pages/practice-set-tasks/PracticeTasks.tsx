import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_ALL_PRACTICE_TASKS } from "../../graphql/practice/practiceTask.graphql";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setPracticeSetTasks } from "../../store/practiceSetTask/slices/practiceSetTaskSlice";
import PracticeSetTaskContainer from "./components/PracticeSetTaskContainer";
import PracticeSetDescription from "./components/UI/PracticeSetDescription";
import PracticeTaskTabs from "./components/UI/PracticeTaskTabs";

export const PracticeSetTaskType = {
  Current: "Current",
  All: "All",
};

function PracticeTasks() {
  const params = useParams();
  const dispatch = useAppDispatch();

  /**
   * Fetching practice set tasks with current practice set
   */
  const { loading: loadingPracticeTasks } = useQuery(GET_ALL_PRACTICE_TASKS, {
    variables: {
      practiceSetId: params.practiceSetId,
      practiceTaskTabSlug: params.taskTabSlug,
    },
    onCompleted: (data) => {
      const { getAPracticeSet, getAllPracticeTasks } = data;
      const payload = {
        practiceTasks: getAllPracticeTasks,
        currentPracticeSet: getAPracticeSet,
      };
      dispatch(setPracticeSetTasks(payload));
    },
  });

  return (
    <div className="relative flex flex-col gap-5">
      <PracticeSetDescription loading={loadingPracticeTasks} />
      <PracticeTaskTabs />
      <PracticeSetTaskContainer loading={loadingPracticeTasks} />
    </div>
  );
}

export default PracticeTasks;
