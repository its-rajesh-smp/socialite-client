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
  onSizeChangeRight,
  setPreviewTabRight,
} from "../../store/codeCompiler/codeCompilerPreviewSlice.ts";
import {
  COLLAPSE_PREVIEW_SIZE,
  DEFAULT_PREVIEW_SIZE,
  rightPanelTabs,
} from "./constants.tsx";
import RightSideTagsContainer from "./RightSideTagsContainer.tsx";

function PreviewRight() {
  const { currentRightTabId, isCollapsedRight } = useAppSelector(
    (state) => state.codeCompilerPreviewSlice,
  );

  const dispatch = useAppDispatch();
  const panelRef = useRef(null);

  return (
    <Panel
      ref={panelRef}
      minSize={COLLAPSE_PREVIEW_SIZE}
      onResize={(size) => {
        dispatch(onSizeChangeRight(size));
      }}
      className="!h-full !w-full"
      defaultSize={DEFAULT_PREVIEW_SIZE}
    >
      <div className="flex !h-full w-full flex-col">
        <RightSideTagsContainer
          panelRef={panelRef}
          currentTagIndex={currentRightTabId}
          onChange={(tabIndex: number) => {
            dispatch(setPreviewTabRight(tabIndex));
          }}
        />

        <SandpackPreview
          className={`!h-full ${currentRightTabId === rightPanelTabs.preview.id && !isCollapsedRight ? "block" : "!hidden"}`}
        />

        <SandpackConsole
          className={`!h-[calc(100%-2.5rem)] ${currentRightTabId === rightPanelTabs.console.id && !isCollapsedRight ? "block" : "!hidden"}`}
        />

        <SandpackTests
          className={`!h-[calc(100%-2.5rem)] ${currentRightTabId === rightPanelTabs.test.id && !isCollapsedRight ? "block" : "!hidden"}`}
        />
      </div>
    </Panel>
  );
}

export default PreviewRight;
