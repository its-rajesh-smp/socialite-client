import { autocompletion, completionKeymap } from "@codemirror/autocomplete";
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackProvider,
} from "@codesandbox/sandpack-react";
import Preview from "./Preview";
import "./style.css";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Separator } from "@radix-ui/themes";

function CodeCompiler() {
  return (
    <SandpackProvider autoFocus template="react" theme="auto">
      <SandpackLayout className="flex h-[calc(100vh-110px)] flex-col md:flex-row">
        <PanelGroup direction="horizontal">
          <Panel defaultSize={25}>
            <button>A</button>
            <button>B</button>
          </Panel>

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
              extensionsKeymap={[completionKeymap]}
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
          {/* PREVIEW */}

          <Preview />
        </PanelGroup>
      </SandpackLayout>
    </SandpackProvider>
  );
}

export default CodeCompiler;
