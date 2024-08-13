import {
  SandpackConsole,
  SandpackPreview,
  SandpackTests,
} from "@codesandbox/sandpack-react";
import { useRef } from "react";
import { Panel } from "react-resizable-panels";
import { useAppDispatch } from "../../hooks/useAppDispatch.ts";
import { useAppSelector } from "../../hooks/useAppSelector.ts";
import {
  onSizeChange_right,
  setPreviewIndex_right,
} from "../../store/others/codeCompiler/codeCompilerPreviewSlice.ts";
import { PreviewIndex_Right } from "./constants.tsx";
import RightSideTagsContainer from "./RightSideTagsContainer.tsx";

function PreviewRight() {
  const { currentPreviewIndex_right, isCollapsed_right } = useAppSelector(
    (state) => state.codeCompilerPreviewSlice,
  );

  const dispatch = useAppDispatch();
  const panelRef = useRef(null);

  return (
    <Panel
      ref={panelRef}
      minSize={5}
      onResize={(size) => {
        dispatch(onSizeChange_right(size));
      }}
      className="!h-full !w-full"
      defaultSize={35}
    >
      <div className="flex !h-full w-full flex-col">
        <RightSideTagsContainer
          panelRef={panelRef}
          currentTagIndex={currentPreviewIndex_right}
          onChange={(tabIndex: number) => {
            dispatch(setPreviewIndex_right(tabIndex));
          }}
        />

        <SandpackPreview
          className={`!h-full ${currentPreviewIndex_right === PreviewIndex_Right.PREVIEW.id && !isCollapsed_right ? "block" : "!hidden"}`}
        />

        <SandpackConsole
          className={`!h-[calc(100%-2.5rem)] ${currentPreviewIndex_right === PreviewIndex_Right.CONSOLE.id && !isCollapsed_right ? "block" : "!hidden"}`}
        />

        <SandpackTests
          className={`!h-[calc(100%-2.5rem)] ${currentPreviewIndex_right === PreviewIndex_Right.TESTS.id && !isCollapsed_right ? "block" : "!hidden"}`}
        />
      </div>
    </Panel>
  );
}

export default PreviewRight;
