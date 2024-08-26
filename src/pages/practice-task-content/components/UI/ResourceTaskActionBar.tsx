import { useMutation } from "@apollo/client";
import { Button } from "@radix-ui/themes";
import { GoBug } from "react-icons/go";
import { SUBMIT_TASK } from "../../../../graphql/practice/userSubmitTask.graphql";

interface IResourceTaskActionBarProps {
  practiceTaskId: string;
  userResponse: string;
}

function ResourceTaskActionBar({
  practiceTaskId,
  userResponse,
}: IResourceTaskActionBarProps) {
  const [mutateSubmitResourceTask] = useMutation(SUBMIT_TASK);

  /**
   * function to submit resource task
   */
  const handleSubmitResourceTask = async () => {
    try {
      const payload = {
        practiceTaskId,
        userResponse: "CONFIRM",
        submittedAt: new Date(),
      };

      await mutateSubmitResourceTask({
        variables: {
          data: payload,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-full flex-col gap-2.5 px-5">
      <hr />
      <div className="flex items-center justify-between gap-4">
        <GoBug className="cursor-pointer text-xl text-primary hover:text-blue-500" />
        <Button onClick={handleSubmitResourceTask} className="cursor-pointer">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default ResourceTaskActionBar;
