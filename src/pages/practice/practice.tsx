import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_ALL_PRACTICE_SET } from "../../graphql/practice/practiceSet.graphql";
import PracticeSetContainer from "./components/PracticeSetContainer";
import CreateNewPracticeBtn from "./components/UI/CreateNewPracticeBtn";
import PracticeSetTabs from "./components/UI/PracticeSetTabs";

function Practice() {
  const [practiceSets, setPracticeSets] = useState([]);

  useQuery(GET_ALL_PRACTICE_SET, {
    onCompleted: (data) => {
      setPracticeSets(data.getAllPracticeSets);
    },
  });

  return (
    <div className="relative flex flex-col gap-5">
      <CreateNewPracticeBtn
        practiceSets={practiceSets}
        setPracticeSets={setPracticeSets}
      />
      <PracticeSetTabs />
      <PracticeSetContainer practiceSets={practiceSets} />
    </div>
  );
}

export default Practice;
