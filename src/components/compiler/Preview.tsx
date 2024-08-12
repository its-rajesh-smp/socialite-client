import {
  SandpackConsole,
  SandpackFileExplorer,
  SandpackPreview,
  SandpackTests,
} from "@codesandbox/sandpack-react";
import { useState } from "react";
import PreviewTagContainer, { PreviewIndex } from "./PreviewTagContainer";
import { Panel } from "react-resizable-panels";

function Preview() {
  const [currentPreviewIndex, setCurrentPreviewIndex] = useState(1);

  return (
    <Panel
      minSize={5}
      onResize={(size) => {
        if (size <= 5) {
          setCurrentPreviewIndex(PreviewIndex.COLLAPSED.id);
        } else {
          setCurrentPreviewIndex(PreviewIndex.PREVIEW.id);
        }
      }}
      className="!h-full !w-full"
      defaultSize={25}
    >
      <div className="flex !h-full w-full flex-col">
        <PreviewTagContainer
          currentTagIndex={currentPreviewIndex}
          onChange={(tabIndex: number) => {
            setCurrentPreviewIndex(tabIndex);
          }}
        />

        <SandpackPreview
          className={`!h-full ${currentPreviewIndex === PreviewIndex.PREVIEW.id ? "block" : "!hidden"}`}
        />

        <SandpackConsole
          className={`!h-[calc(100%-2.5rem)] ${currentPreviewIndex === PreviewIndex.CONSOLE.id ? "block" : "!hidden"}`}
        />

        <SandpackTests
          className={`!h-[calc(100%-2.5rem)] ${currentPreviewIndex === PreviewIndex.TESTS.id ? "block" : "!hidden"}`}
        />

        <SandpackFileExplorer
          className={`!h-[calc(100%-2.5rem)] ${currentPreviewIndex === PreviewIndex.FILE_MANAGER.id ? "block" : "!hidden"}`}
        />
      </div>
    </Panel>
  );
}

export default Preview;
