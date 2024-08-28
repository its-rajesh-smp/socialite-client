import { useMutation } from "@apollo/client";
import { GoBug } from "react-icons/go";
import { toast } from "react-toastify";
import IconButton from "../../../../components/inputs/IconButton";
import { SUBMIT_TASK } from "../../../../graphql/practice/userSubmitTask.graphql";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { updatePracticeSetTask } from "../../../../store/practiceSetTask/practiceSetTaskSlice";
import { updatePracticeTaskContent } from "../../../../store/practiceTaskContent/practiceTaskContentSlice";
import { getTimeAgo } from "../../../../utils/date";

function ResourceTaskActionBar() {
  const currentPracticeTask = useAppSelector(
    (state) => state.practiceTaskContentSlice,
  );
  const [mutateSubmitResourceTask, { loading: submitLoading }] =
    useMutation(SUBMIT_TASK);
  const dispatch = useAppDispatch();

  /**
   * function to submit resource task
   */
  const handleSubmitResourceTask = async () => {
    const payload = {
      practiceTaskId: currentPracticeTask.id,
      userResponse: "CONFIRM",
      submittedAt: new Date(),
    };
    await mutateSubmitResourceTask({
      variables: {
        data: payload,
      },
    });

    dispatch(updatePracticeSetTask({ submittedAt: payload.submittedAt }));
    dispatch(updatePracticeTaskContent({ submittedAt: payload.submittedAt }));
    toast.success("Submitted successfully");
  };

  return (
    <div className="flex w-full flex-col gap-2.5 px-5">
      <hr />
      <div className="flex items-center justify-between gap-4">
        <GoBug className="cursor-pointer text-xl text-primary hover:text-blue-500" />

        <div className="flex items-center gap-4">
          {currentPracticeTask.submittedAt && (
            <p className="text-xs text-gray-500">
              Last submitted at :{" "}
              <span>{getTimeAgo(currentPracticeTask.submittedAt)}</span>
            </p>
          )}
          <IconButton
            className="w-fit"
            loading={submitLoading}
            onClick={handleSubmitResourceTask}
          >
            <p>Submit</p>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default ResourceTaskActionBar;
