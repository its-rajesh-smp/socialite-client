import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_A_PRACTICE_TASK } from "../../graphql/practice/practiceTask.graphql";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setPracticeTaskContent } from "../../store/practiceTaskContent/practiceTaskContentSlice";
import ResourceTask from "./components/ResourceTask";
import PracticeTaskContentSkeleton from "./components/UI/PracticeTaskContentSkeleton";

function PracticeTaskContent() {
  const params = useParams();
  const dispatch = useAppDispatch();

  // Fetching the current practice task
  const { loading: loadingPracticeTask } = useQuery(GET_A_PRACTICE_TASK, {
    variables: {
      id: params.practiceTaskId,
    },
    onCompleted(response) {
      dispatch(setPracticeTaskContent(response.getAPracticeTask));
    },
  });

  if (loadingPracticeTask) {
    return <PracticeTaskContentSkeleton />;
  }

  return (
    <div>
      {/* <CodingTask /> */}
      <ResourceTask />
    </div>
  );
}

export default PracticeTaskContent;
