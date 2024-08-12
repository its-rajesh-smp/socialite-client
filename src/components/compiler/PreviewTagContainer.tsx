import Tag from "../others/Tag";
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";
import { FaRegEye } from "react-icons/fa";
import { IoTerminalOutline } from "react-icons/io5";
import { MdFileCopy } from "react-icons/md";
import { BiTestTube } from "react-icons/bi";

export const PreviewIndex = {
  COLLAPSED: {
    id: -1,
    name: "Collapse",
    icon: <TbLayoutSidebarRightCollapseFilled />,
  },
  PREVIEW: { id: 0, name: "Preview", icon: <FaRegEye /> },
  CONSOLE: { id: 1, name: "Console", icon: <IoTerminalOutline /> },
  TESTS: { id: 2, name: "Tests", icon: <BiTestTube /> },
  FILE_MANAGER: { id: 3, name: "File Manager", icon: <MdFileCopy /> },
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
      <div
        className={`small_scrollbar flex overflow-x-auto overflow-y-hidden bg-white p-2 ${currentTagIndex === PreviewIndex.COLLAPSED.id ? "h-full !flex-col gap-5" : "h-10 flex-row gap-3"}`}
      >
        {Object.entries(PreviewIndex).map(([key, value]) => (
          <Tag
            key={value.id}
            isActive={currentTagIndex === value.id}
            onClick={() => onChange(value.id)}
            title={value.name}
            icon={value.icon}
            showIcon={true}
            showTitle={false}
            showCloseBtnIcon={false}
            containerClassName="!h-10 rounded-md text-xl"
          />
        ))}
      </div>
      <hr />
    </div>
  );
}

export default PreviewTagContainer;
