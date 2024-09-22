function PracticeSetProgress({ expand }: any) {
  return (
    <div
      className={`flex w-80 items-center space-x-2 transition-all duration-300 ${expand && "!w-full"}`}
    >
      <div className="text-sm font-medium">Progress:</div>
      <div
        className="h-2 flex-1 overflow-hidden rounded-full bg-gray-200"
        style={{ width: "150px" }}
      >
        <div className="h-full bg-black" style={{ width: `${10}%` }}></div>
      </div>
      <div className="text-sm text-gray-500">
        {5}/{1000000}
      </div>
    </div>
  );
}

export default PracticeSetProgress;
