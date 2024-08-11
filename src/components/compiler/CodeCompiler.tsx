import { autocompletion, completionKeymap } from "@codemirror/autocomplete";
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackProvider,
} from "@codesandbox/sandpack-react";
import Preview from "./Preview";
import "./style.css";

function CodeCompiler() {
  return (
    <SandpackProvider autoFocus template="vanilla" theme="auto">
      <SandpackLayout className="flex h-[calc(100vh-110px)] flex-col md:flex-row">
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
        />

        <Preview />
      </SandpackLayout>
    </SandpackProvider>
  );
}

export default CodeCompiler;
