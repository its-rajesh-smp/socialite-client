import { SandpackFileExplorer } from "@codesandbox/sandpack-react";
import { useRef } from "react";
import { Panel } from "react-resizable-panels";
import { useAppDispatch } from "../../hooks/useAppDispatch.ts";
import { useAppSelector } from "../../hooks/useAppSelector.ts";
import {
  onSizeChange_left,
  setPreviewIndex_left,
} from "../../store/others/codeCompiler/codeCompilerPreviewSlice.ts";
import { PreviewIndex_Left } from "./constants.tsx";
import LeftSideTagsContainer from "./LeftSideTagsContainer.tsx";

function PreviewLeft() {
  const { currentPreviewIndex_left, isCollapsed_left } = useAppSelector(
    (state) => state.codeCompilerPreviewSlice,
  );

  const dispatch = useAppDispatch();
  const panelRef = useRef(null);

  return (
    <Panel
      ref={panelRef}
      minSize={5}
      onResize={(size) => {
        dispatch(onSizeChange_left(size));
      }}
      className="!h-full !w-full"
      defaultSize={35}
    >
      <div className="flex !h-full w-full flex-col">
        <LeftSideTagsContainer
          panelRef={panelRef}
          currentTagIndex={currentPreviewIndex_left}
          onChange={(tabIndex: number) => {
            dispatch(setPreviewIndex_left(tabIndex));
          }}
        />

        <SandpackFileExplorer
          className={`!h-[calc(100%-2.5rem)] ${currentPreviewIndex_left === PreviewIndex_Left.FILE_MANAGER.id && !isCollapsed_left ? "block" : "!hidden"}`}
        />
      </div>
    </Panel>
  );
}

export default PreviewLeft;
