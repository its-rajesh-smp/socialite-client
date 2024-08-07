import { IPracticeSet } from "../../../types/practice";
import PracticeSet from "./UI/PracticeSet";

interface PracticeSetContainerProps {
  practiceSets: IPracticeSet[];
}

function PracticeSetContainer({ practiceSets }: PracticeSetContainerProps) {
  return (
    <div className="flex flex-col gap-3">
      {practiceSets.map((practiceSet) => (
        <PracticeSet key={practiceSet.id} {...practiceSet} />
      ))}
    </div>
  );
}

export default PracticeSetContainer;
