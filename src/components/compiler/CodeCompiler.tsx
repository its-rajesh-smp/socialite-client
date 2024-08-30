import { autocompletion, completionKeymap } from "@codemirror/autocomplete";
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPredefinedTemplate,
  SandpackProvider,
} from "@codesandbox/sandpack-react";
import { Separator } from "@radix-ui/themes";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useAppSelector } from "../../hooks/useAppSelector";
import PreviewLeft from "./PreviewLeft";
import PreviewRight from "./PreviewRight";
import "./style.css";

interface ICodeCompilerProps {
  rightBottomPreviewContent?: React.ReactNode;
  leftBottomPreviewContent?: React.ReactNode;
}

function CodeCompiler({ rightBottomPreviewContent }: ICodeCompilerProps) {
  const { currentCompilerType } = useAppSelector(
    (state) => state.codeCompilerSettingSlice,
  );

  return (
    <SandpackProvider
      autoFocus
      template={currentCompilerType as SandpackPredefinedTemplate}
      theme="light"
    >
      <SandpackLayout className="flex h-[calc(100vh-110px)] flex-col md:flex-row">
        <PanelGroup direction="horizontal">
          {/* PREVIEW LEFT */}
          <PreviewLeft />

          {/* RESIZER */}
          <PanelResizeHandle>
            <Separator />
          </PanelResizeHandle>

          <Panel defaultSize={50}>
            {/* CODE EDITOR */}
            <SandpackCodeEditor
              showTabs={true}
              showRunButton
              extensions={[
                autocompletion({
                  filterStrict: true,
                }),
              ]}
              extensionsKeymap={[...completionKeymap]}
              wrapContent
              className="!h-full"
              closableTabs
              showLineNumbers
              showInlineErrors
            />
          </Panel>

          {/* RESIZER */}
          <PanelResizeHandle>
            <Separator />
          </PanelResizeHandle>

          {/* PREVIEW RIGHT */}
          <PreviewRight bottomPreviewContent={rightBottomPreviewContent} />
        </PanelGroup>
      </SandpackLayout>
    </SandpackProvider>
  );
}

export default CodeCompiler;
