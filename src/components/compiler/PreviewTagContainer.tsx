import Tag from "../others/Tag";

export const PreviewIndex = {
  PREVIEW: 0,
  CONSOLE: 1,
  TESTS: 2,
  FILE_MANAGER: 3,
};

function PreviewTagContainer({
  onChange,
  currentTagIndex,
}: {
  onChange: (tabIndex: number) => void;
  currentTagIndex: number;
}) {
  return (
    <div>
      <div className="flex h-10 gap-3 bg-white p-2">
        {Object.entries(PreviewIndex).map(([key, value]) => (
          <Tag
            key={value}
            isActive={currentTagIndex === value}
            onClick={() => onChange(value)}
            title={key}
          />
        ))}
      </div>
      <hr />
    </div>
  );
}

export default PreviewTagContainer;
