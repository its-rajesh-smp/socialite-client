import { useState } from "react";
import CreateNewPracticeBtn from "./components/CreateNewPracticeBtn";
import PracticeSetContainer from "./components/PracticeSetContainer";

function Practice() {
  const [practiceSets, setPracticeSets] = useState([]);
  return (
    <div className="relative">
      <CreateNewPracticeBtn
        practiceSets={practiceSets}
        setPracticeSets={setPracticeSets}
      />
      <PracticeSetContainer />
    </div>
  );
}

export default Practice;
