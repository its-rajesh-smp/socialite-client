import { useState } from "react";
import CreateNewPracticeBtn from "./components/CreateNewPracticeBtn";
import PracticeSetContainer from "./components/PracticeSetContainer";
import { useQuery } from "@apollo/client";
import { GetPracticeSets } from "../../graphql/practiceSet.graphql";

function Practice() {
  const [practiceSets, setPracticeSets] = useState([]);

  useQuery(GetPracticeSets, {
    onCompleted: (data) => {
      setPracticeSets(data.getAllPracticeSets);
    },
  });

  return (
    <div className="relative">
      <CreateNewPracticeBtn
        practiceSets={practiceSets}
        setPracticeSets={setPracticeSets}
      />
      <PracticeSetContainer practiceSets={practiceSets} />
    </div>
  );
}

export default Practice;
