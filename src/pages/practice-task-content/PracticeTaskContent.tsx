import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { GET_A_PRACTICE_TASK } from "../../graphql/practice/practiceTask.graphql";
import ResourceTask from "./components/ResourceTask";
import CodingTask from "./components/CodingTask";

export interface IPracticeTaskContent {
  title: string;
  description: string;
  id: string;
}

function PracticeTaskContent() {
  const params = useParams();
  const [practiceTaskContent, setPracticeTaskContent] =
    useState<IPracticeTaskContent | null>(null);

  useQuery(GET_A_PRACTICE_TASK, {
    variables: {
      id: params.practiceTaskId,
    },
    onCompleted(response) {
      setPracticeTaskContent(response.getAPracticeTask);
    },
  });

  return (
    practiceTaskContent && (
      <div>
        {/* <CodingTask /> */}
        <ResourceTask {...practiceTaskContent} />
      </div>
    )
  );
}

export default PracticeTaskContent;
