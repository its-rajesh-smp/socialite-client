import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_ALL_PRACTICE_SET } from "../../graphql/practice/practiceSet.graphql";
import PracticeSetContainer from "./components/PracticeSetContainer";
import CreateNewPracticeBtn from "./components/UI/CreateNewPracticeBtn";

function Practice() {
  const [practiceSets, setPracticeSets] = useState([]);

  useQuery(GET_ALL_PRACTICE_SET, {
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
