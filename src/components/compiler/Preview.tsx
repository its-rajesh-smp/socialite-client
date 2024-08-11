import {
  SandpackConsole,
  SandpackFileExplorer,
  SandpackPreview,
  SandpackTests,
} from "@codesandbox/sandpack-react";
import { useState } from "react";
import PreviewTagContainer, { PreviewIndex } from "./PreviewTagContainer";

function Preview() {
  const [currentPreviewIndex, setCurrentPreviewIndex] = useState(1);
  return (
    <div className="flex !h-full w-[50%] flex-col">
      <PreviewTagContainer
        currentTagIndex={currentPreviewIndex}
        onChange={(tabIndex: number) => {
          setCurrentPreviewIndex(tabIndex);
        }}
      />

      <SandpackPreview
        className={`!h-full ${currentPreviewIndex === PreviewIndex.PREVIEW ? "block" : "!hidden"}`}
      />

      <SandpackConsole
        className={`!h-[calc(100%-2.5rem)] ${currentPreviewIndex === PreviewIndex.CONSOLE ? "block" : "!hidden"}`}
      />

      <SandpackTests
        className={`!h-[calc(100%-2.5rem)] ${currentPreviewIndex === PreviewIndex.TESTS ? "block" : "!hidden"}`}
      />

      <SandpackFileExplorer
        className={`!h-[calc(100%-2.5rem)] ${currentPreviewIndex === PreviewIndex.FILE_MANAGER ? "block" : "!hidden"}`}
      />
    </div>
  );
}

export default Preview;
