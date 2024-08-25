import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { accordionStates } from "../../constants/common.const";
import { GET_ALL_PRACTICE_TASKS } from "../../graphql/practice/practiceTask.graphql";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setPracticeSetTasks } from "../../store/practiceSetTask/practiceSetTaskSlice";
import {
  setEditing,
  setPracticeSetDescAccordionState,
} from "../../store/practiceSetTask/practiceTaskActionSlice";
import PracticeSetTaskContainer from "./components/PracticeSetTaskContainer";
import CreateNewTaskBtn from "./components/UI/CreateNewTaskBtn";
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
   * Setting practice set description accordion state
   */
  useEffect(() => {
    dispatch(setEditing(false));
    dispatch(
      setPracticeSetDescAccordionState(params.practiceSetDescAccordionState),
    );
    return () => {
      dispatch(setPracticeSetDescAccordionState(accordionStates.collapsed));
    };
  }, [params]);

  /**
   * Fetching practice set tasks with current practice set
   */
  useQuery(GET_ALL_PRACTICE_TASKS, {
    variables: {
      practiceSetId: params.practiceSetId,
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
      <PracticeSetDescription />
      <PracticeTaskTabs />
      <PracticeSetTaskContainer />
      <CreateNewTaskBtn />
    </div>
  );
}

export default PracticeTasks;
