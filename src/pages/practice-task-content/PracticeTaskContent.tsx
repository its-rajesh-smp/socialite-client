import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_A_PRACTICE_TASK } from "../../graphql/practice/practiceTask.graphql";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { setPracticeTaskContent } from "../../store/practiceTaskContent/practiceTaskContentSlice";
import ResourceTask from "./components/ResourceTask";

function PracticeTaskContent() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const currentPracticeTask = useAppSelector(
    (state) => state.practiceTaskContentSlice,
  );

  // Fetching the current practice task
  useQuery(GET_A_PRACTICE_TASK, {
    variables: {
      id: params.practiceTaskId,
    },
    onCompleted(response) {
      dispatch(setPracticeTaskContent(response.getAPracticeTask));
    },
  });

  if (!currentPracticeTask) return;

  return (
    <div>
      {/* <CodingTask /> */}
      <ResourceTask />
    </div>
  );
}

export default PracticeTaskContent;
