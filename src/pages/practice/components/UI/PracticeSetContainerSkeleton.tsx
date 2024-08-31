import PracticeSetSkeleton from "./PracticeSetSkeleton";

function PracticeSetContainerSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      <PracticeSetSkeleton />
      <PracticeSetSkeleton />
      <PracticeSetSkeleton />
    </div>
  );
}

export default PracticeSetContainerSkeleton;
