import PracticeSet from "./UI/PracticeSet";

function PracticeSetContainer() {
  return (
    <div className="flex flex-col gap-3">
      <PracticeSet />
      <PracticeSet />
      <PracticeSet />
      <PracticeSet />
    </div>
  );
}

export default PracticeSetContainer;
