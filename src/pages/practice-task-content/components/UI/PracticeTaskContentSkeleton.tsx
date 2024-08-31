import Loader from "../../../../components/others/Loader";

function PracticeTaskContentSkeleton() {
  return (
    <div className="flex h-full items-center justify-center gap-2">
      <Loader className="text-5xl" />
      <p className="animate-pulse">Loading</p>
    </div>
  );
}

export default PracticeTaskContentSkeleton;
