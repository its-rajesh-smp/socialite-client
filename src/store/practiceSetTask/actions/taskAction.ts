import client from "../../../graphql/apollo.config";
import { UPDATE_PRACTICE_TASK } from "../../../graphql/practice/practiceTask.graphql";
import { setPracticeTaskContent } from "../../practiceTaskContent/practiceTaskContentSlice";
import { AppDispatch, RootState } from "../../store";

/**
 * Function to update practice task
 * @returns void
 */
export const updatePracticeTask = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const updatePracticeTask = getState().practiceTaskContentSlice.updatedTask;
    const currentTags = getState().taskTagSlice.currentTaskTags;

    const payload = {
      id: updatePracticeTask.id,
      description: updatePracticeTask.description,
      title: updatePracticeTask.title,
      taskTags: currentTags.map((tag) => ({ name: tag.name, id: tag.id })),
    };

    await client.mutate({
      mutation: UPDATE_PRACTICE_TASK,
      variables: {
        data: payload,
      },
    });

    dispatch(setPracticeTaskContent(updatePracticeTask));
  };
};
