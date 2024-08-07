import { gql } from "@apollo/client";

export const CreatePracticeSet = gql`
  mutation createPracticeSet($createPracticeSetInput: CreatePracticeSetInput!) {
    createPracticeSet(createPracticeSetInput: $createPracticeSetInput) {
      id
      title
      description
    }
  }
`;
