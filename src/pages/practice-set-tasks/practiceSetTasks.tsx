import PracticeSetTaskContainer from "./components/PracticeSetTaskContainer";
import CreateNewTaskBtn from "./components/UI/CreateNewTaskBtn";

function PracticeSetTasks() {
  return (
    <div className="relative">
      <PracticeSetTaskContainer />
      <CreateNewTaskBtn />
    </div>
  );
}

export default PracticeSetTasks;
