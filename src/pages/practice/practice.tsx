import { useState } from "react";
import CreateNewPracticeBtn from "./components/CreateNewPracticeBtn";

function Practice() {
  const [practiceSets, setPracticeSets] = useState([]);
  return (
    <div className="relative">
      <CreateNewPracticeBtn
        practiceSets={practiceSets}
        setPracticeSets={setPracticeSets}
      />
    </div>
  );
}

export default Practice;
