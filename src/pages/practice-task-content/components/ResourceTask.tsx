import Container from "../../../components/containers/Container";
import Editor from "../../../components/editor/Editor";
import { IPracticeTaskContent } from "../PracticeTaskContent";
import ResourceTaskActionBar from "./UI/ResourceTaskActionBar";

function ResourceTask({ id, description }: IPracticeTaskContent) {
  return (
    <div className="flex justify-center">
      <Container
        fullHeight
        className="flex w-1/2 flex-col items-center gap-0 px-3 pb-0"
      >
        <div className="small_scrollbar h-[calc(100vh-150px)] w-full overflow-x-auto overflow-y-auto px-2">
          <Editor editable={false} value={description} />
        </div>
        <ResourceTaskActionBar practiceTaskId={id} userResponse="CONFIRM" />
      </Container>
    </div>
  );
}

export default ResourceTask;
