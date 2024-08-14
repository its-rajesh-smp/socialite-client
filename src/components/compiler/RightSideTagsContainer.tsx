import Tag from "../others/Tag";
import { useAppSelector } from "../../hooks/useAppSelector";
import { PreviewIndex_Right } from "./constants";
import { ImperativePanelHandle } from "react-resizable-panels";
import { setCollapsed_right } from "../../store/others/codeCompiler/codeCompilerPreviewSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { IoReorderThreeOutline } from "react-icons/io5";

interface IRightSideTagsContainer {
  onChange: (tabIndex: number) => void;
  currentTagIndex: number;
  panelRef?: React.RefObject<ImperativePanelHandle>;
}

function RightSideTagsContainer({
  onChange,
  currentTagIndex,
  panelRef,
}: IRightSideTagsContainer) {
  const dispatch = useAppDispatch();
  const { isCollapsed_right } = useAppSelector(
    (state) => state.codeCompilerPreviewSlice,
  );

  return (
    <div className={`${isCollapsed_right ? "h-full" : ""}`}>
      <div
        className={`small_scrollbar flex overflow-x-auto overflow-y-hidden bg-white p-2 ${isCollapsed_right ? "h-full !flex-col gap-5" : "h-10 flex-row gap-3"}`}
      >
        <Tag
          icon={<IoReorderThreeOutline />}
          showIcon={true}
          onClick={() => {
            dispatch(setCollapsed_right());
            isCollapsed_right
              ? panelRef?.current?.resize(35)
              : panelRef?.current?.resize(5);
          }}
          containerClassName={` rounded-md text-xl  ${isCollapsed_right ? "!h-10" : ""}`}
        />

        {Object.values(PreviewIndex_Right).map((value) => (
          <Tag
            key={value.id}
            isActive={currentTagIndex === value.id}
            onClick={() => {
              onChange(value.id);
              isCollapsed_right && panelRef?.current?.resize(35);
            }}
            title={value.name}
            icon={value.icon}
            showIcon={true}
            showCloseBtnIcon={false}
            containerClassName={` rounded-md text-xl ${isCollapsed_right ? "!h-10" : ""}`}
          />
        ))}
      </div>
      <hr />
    </div>
  );
}

export default RightSideTagsContainer;
