import Container from "../../../../../components/containers/Container";
import Editor from "../../../../../components/editor/Editor";
import { useAppDispatch } from "../../../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../../../hooks/useAppSelector";
import { updatePracticeTaskContent } from "../../../../../store/practiceTaskContent/practiceTaskContentSlice";
import EditTaskPopover from "../../UI/EditTaskPopover";
import ResourceTaskActionBar from "./UI/ResourceTaskActionBar";

function ResourceTask() {
  const { currentTask } = useAppSelector(
    (state) => state.practiceTaskContentSlice,
  );
  const isEditing = useAppSelector(
    (state) => state.practiceTaskContentActionSlice.isContentEditable,
  );

  const dispatch = useAppDispatch();

  return (
    <div className="relative flex justify-center overflow-hidden">
      <Container
        fullHeight
        className="flex w-3/4 flex-col items-center gap-0 px-3 pb-0"
      >
        <div className="small_scrollbar h-[calc(100vh-150px)] w-full overflow-x-auto overflow-y-auto px-2">
          <Container className="flex justify-between pt-0">
            <p
              onInput={(e) =>
                dispatch(
                  updatePracticeTaskContent({
                    title: (e.target as HTMLElement).textContent,
                  }),
                )
              }
              suppressContentEditableWarning
              contentEditable={isEditing}
              className="text-3xl font-semibold text-primary"
            >
              {currentTask.title}
            </p>
            <EditTaskPopover />
          </Container>
          <hr />
          <Editor
            className="pt-2"
            onChange={(value) =>
              dispatch(
                updatePracticeTaskContent({
                  description: JSON.stringify(value),
                }),
              )
            }
            editable={isEditing}
            value={currentTask.description}
          />
        </div>
        <ResourceTaskActionBar />
      </Container>
    </div>
  );
}

export default ResourceTask;
