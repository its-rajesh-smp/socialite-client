import { gql } from "@apollo/client";

export const FORK_PRACTICE_SET = gql`
  mutation forkPracticeSet($practiceSetId: String) {
    forkPracticeSet(practiceSetId: $practiceSetId) {
      id
    }
  }
`;
