import { IoReorderThreeOutline } from "react-icons/io5";
import { ImperativePanelHandle } from "react-resizable-panels";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { setCollapsedLeft } from "../../store/codeCompiler/codeCompilerPreviewSlice";
import Tag from "../others/Tag";
import {
  COLLAPSE_PREVIEW_SIZE,
  DEFAULT_PREVIEW_SIZE,
  leftPanelTabs,
} from "./constants";

interface ILeftSideTagsContainer {
  onChange: (tabIndex: number) => void;
  currentTagIndex: number;
  panelRef?: React.RefObject<ImperativePanelHandle>;
}

function LeftSideTagsContainer({
  onChange,
  currentTagIndex,
  panelRef,
}: ILeftSideTagsContainer) {
  const { isCollapsedLeft } = useAppSelector(
    (state) => state.codeCompilerPreviewSlice,
  );
  const dispatch = useAppDispatch();

  return (
    <div className={`${isCollapsedLeft ? "h-full" : ""}`}>
      <div
        className={`small_scrollbar flex overflow-x-auto overflow-y-hidden bg-white p-2 ${isCollapsedLeft ? "h-full !flex-col gap-5" : "h-10 flex-row gap-3"}`}
      >
        <Tag
          icon={<IoReorderThreeOutline />}
          showIcon={true}
          onClick={() => {
            dispatch(setCollapsedLeft());
            isCollapsedLeft
              ? panelRef?.current?.resize(DEFAULT_PREVIEW_SIZE)
              : panelRef?.current?.resize(COLLAPSE_PREVIEW_SIZE);
          }}
          containerClassName={` rounded-md text-xl  ${isCollapsedLeft ? "!h-10" : ""}`}
        />

        {Object.values(leftPanelTabs).map((value) => (
          <Tag
            key={value.id}
            isActive={currentTagIndex === value.id}
            onClick={() => {
              onChange(value.id);
              isCollapsedLeft &&
                panelRef?.current?.resize(DEFAULT_PREVIEW_SIZE);
            }}
            title={value.name}
            icon={value.icon}
            showIcon={true}
            showCloseBtnIcon={false}
            containerClassName={` rounded-md text-xl ${isCollapsedLeft ? "!h-10" : ""}`}
          />
        ))}
      </div>
      <hr />
    </div>
  );
}

export default LeftSideTagsContainer;
