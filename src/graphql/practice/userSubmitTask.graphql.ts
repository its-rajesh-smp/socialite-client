import { gql } from "@apollo/client";

export const SUBMIT_TASK = gql`
  mutation submitTask($data: UserSubmitTaskInput) {
    submitUserTask(submitTaskData: $data) {
      id
    }
  }
`;
