import PracticeSetTabs from "./components/PracticeSetTabs";
import PracticeSetTaskContainer from "./components/PracticeSetTaskContainer";
import CreateNewTaskBtn from "./components/UI/CreateNewTaskBtn";

export const PracticeSetTaskType = {
  Current: "Current",
  All: "All",
};

function PracticeTasks() {
  return (
    <div className="relative flex flex-col gap-5">
      <PracticeSetTabs />
      <PracticeSetTaskContainer />
      <CreateNewTaskBtn />
    </div>
  );
}

export default PracticeTasks;
