import { useMutation } from "@apollo/client";
import { useState } from "react";
import Container from "../../../components/containers/Container";
import Editor from "../../../components/editor/Editor";
import { UPDATE_PRACTICE_TASK } from "../../../graphql/practice/practiceTask.graphql";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { updatePracticeTaskContent } from "../../../store/practiceTaskContent/practiceTaskContentSlice";
import ActionDropdown from "./UI/ActionDropdown";
import ResourceTaskActionBar from "./UI/ResourceTaskActionBar";

function ResourceTask() {
  const authenticatedUser = useAppSelector((state) => state.authSlice);
  const currentPracticeTask = useAppSelector(
    (state) => state.practiceTaskContentSlice,
  );
  const isEditing = useAppSelector(
    (state) => state.practiceTaskContentActionSlice.isContentEditable,
  );
  const [mutateUpdateTask] = useMutation(UPDATE_PRACTICE_TASK);
  const [editedContent, setEditedContent] = useState(currentPracticeTask);
  const dispatch = useAppDispatch();
  const hasEditAccess = currentPracticeTask?.user?.id === authenticatedUser.id;

  const onContentSave = async () => {
    const payload = {
      id: currentPracticeTask.id,
      description:
        JSON.stringify(editedContent.description) ||
        currentPracticeTask.description,
      title: editedContent.title || currentPracticeTask.title,
    };

    await mutateUpdateTask({
      variables: {
        data: payload,
      },
      onCompleted: () => {
        dispatch(updatePracticeTaskContent(payload));
      },
    });
  };

  return (
    <div className="relative flex justify-center overflow-hidden">
      <Container
        fullHeight
        className="flex w-3/4 flex-col items-center gap-0 px-3 pb-0"
      >
        <div className="small_scrollbar h-[calc(100vh-150px)] w-full overflow-x-auto overflow-y-auto px-2">
          <Container className="pt-0">
            <p
              onInput={(e) =>
                setEditedContent((prev) => ({
                  ...prev,
                  title: (e.target as HTMLElement).textContent || "",
                }))
              }
              suppressContentEditableWarning
              contentEditable={isEditing}
              className="text-3xl font-semibold text-primary"
            >
              {currentPracticeTask.title}
            </p>
          </Container>
          <hr />

          <Editor
            className="pt-2"
            onChange={(value) =>
              setEditedContent((prev) => ({ ...prev, description: value }))
            }
            editable={isEditing}
            value={currentPracticeTask.description}
          />
        </div>
        <ResourceTaskActionBar />
        {hasEditAccess && <ActionDropdown onSave={onContentSave} />}
      </Container>
    </div>
  );
}

export default ResourceTask;
