import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useParams } from "react-router-dom";
import PracticeSetContainer from "./components/PracticeSetContainer";
import CreateNewPracticeBtn from "./components/UI/CreateNewPracticeBtn";
import PracticeSetTabs from "./components/UI/PracticeSetTabs";
import { normalizeData } from "./helpers/getData";
import { getQueryBySlug } from "./helpers/getQuery";

function Practice() {
  const [practiceSets, setPracticeSets] = useState([]);
  const param = useParams();

  // Fetching practice sets based on current tab
  const { loading: loadingPracticeSets } = useQuery(
    getQueryBySlug(param.practiceTabSlug),
    {
      onCompleted: (data) => {
        setPracticeSets(normalizeData(data));
      },
      onError: (err) => console.log(err),
    },
  );

  return (
    <div className="relative flex flex-col gap-5">
      <CreateNewPracticeBtn
        practiceSets={practiceSets}
        setPracticeSets={setPracticeSets}
      />
      <PracticeSetTabs loading={loadingPracticeSets} />
      <PracticeSetContainer
        loading={loadingPracticeSets}
        setPracticeSets={setPracticeSets}
        practiceSets={practiceSets}
      />
    </div>
  );
}

export default Practice;
