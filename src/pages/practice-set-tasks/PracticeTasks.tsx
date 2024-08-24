import PracticeSetTaskContainer from "./components/PracticeSetTaskContainer";
import CreateNewTaskBtn from "./components/UI/CreateNewTaskBtn";
import PracticeSetDescription from "./components/UI/PracticeSetDescription";
import PracticeTaskTabs from "./components/UI/PracticeTaskTabs";

export const PracticeSetTaskType = {
  Current: "Current",
  All: "All",
};

function PracticeTasks() {
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
