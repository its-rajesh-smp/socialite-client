import { IoReorderThreeOutline } from "react-icons/io5";
import { ImperativePanelHandle } from "react-resizable-panels";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { setCollapsed_left } from "../../store/others/codeCompiler/codeCompilerPreviewSlice";
import Tag from "../others/Tag";
import { PreviewIndex_Left } from "./constants";

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
  const dispatch = useAppDispatch();
  const { isCollapsed_left } = useAppSelector(
    (state) => state.codeCompilerPreviewSlice,
  );

  return (
    <div className={`${isCollapsed_left ? "h-full" : ""}`}>
      <div
        className={`small_scrollbar flex overflow-x-auto overflow-y-hidden bg-white p-2 ${isCollapsed_left ? "h-full !flex-col gap-5" : "h-10 flex-row gap-3"}`}
      >
        <Tag
          icon={<IoReorderThreeOutline />}
          showIcon={true}
          onClick={() => {
            dispatch(setCollapsed_left());
            isCollapsed_left
              ? panelRef?.current?.resize(35)
              : panelRef?.current?.resize(5);
          }}
          containerClassName={` rounded-md text-xl  ${isCollapsed_left ? "!h-10" : ""}`}
        />

        {Object.values(PreviewIndex_Left).map((value) => (
          <Tag
            key={value.id}
            isActive={currentTagIndex === value.id}
            onClick={() => {
              onChange(value.id);
              isCollapsed_left && panelRef?.current?.resize(35);
            }}
            title={value.name}
            icon={value.icon}
            showIcon={true}
            showTitle={isCollapsed_left ? false : true}
            showCloseBtnIcon={false}
            containerClassName={` rounded-md text-xl ${isCollapsed_left ? "!h-10" : ""}`}
          />
        ))}
      </div>
      <hr />
    </div>
  );
}

export default LeftSideTagsContainer;
