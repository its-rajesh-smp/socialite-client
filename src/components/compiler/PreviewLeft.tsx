import { SandpackFileExplorer } from "@codesandbox/sandpack-react";
import { useRef } from "react";
import { Panel } from "react-resizable-panels";
import { useAppDispatch } from "../../hooks/useAppDispatch.ts";
import { useAppSelector } from "../../hooks/useAppSelector.ts";
import {
  onSizeChangeLeft,
  setPreviewTabLeft,
} from "../../store/codeCompiler/actions/codeCompilerPreviewSlice.ts";
import CodeCompilerSetting from "./CodeCompilerSetting.tsx";
import {
  COLLAPSE_PREVIEW_SIZE,
  DEFAULT_PREVIEW_SIZE,
  leftPanelTabs,
} from "./constants.tsx";
import LeftSideTagsContainer from "./LeftSideTagsContainer.tsx";
import Note from "./Note.tsx";

function PreviewLeft() {
  const { currentLeftTabId, isCollapsedLeft } = useAppSelector(
    (state) => state.codeCompilerPreviewSlice,
  );

  const dispatch = useAppDispatch();
  const panelRef = useRef(null);

  return (
    <Panel
      ref={panelRef}
      minSize={COLLAPSE_PREVIEW_SIZE}
      onResize={(size) => {
        dispatch(onSizeChangeLeft(size));
      }}
      className="!h-full !w-full"
      defaultSize={DEFAULT_PREVIEW_SIZE}
    >
      <div className="flex !h-full w-full flex-col">
        <LeftSideTagsContainer
          panelRef={panelRef}
          currentTagIndex={currentLeftTabId}
          onChange={(tabIndex: number) => {
            dispatch(setPreviewTabLeft(tabIndex));
          }}
        />

        <SandpackFileExplorer
          className={`!h-[calc(100%-2.5rem)] ${currentLeftTabId === leftPanelTabs.fileManager.id && !isCollapsedLeft ? "block" : "!hidden"}`}
        />

        <CodeCompilerSetting
          className={`!h-[calc(100%-2.5rem)] ${currentLeftTabId === leftPanelTabs.setting.id && !isCollapsedLeft ? "block" : "!hidden"}`}
        />

        <Note
          className={`!h-[calc(100%-2.5rem)] ${currentLeftTabId === leftPanelTabs.note.id && !isCollapsedLeft ? "block" : "!hidden"}`}
        />

        {/* <Description
          className={`!h-[calc(100%-2.5rem)] ${currentLeftTabId === leftPanelTabs.description.id && !isCollapsedLeft ? "block" : "!hidden"}`}
        /> */}
      </div>
    </Panel>
  );
}

export default PreviewLeft;
