import { gql } from "@apollo/client";

export const GET_ALL_PRACTICE_SET = gql`
  query {
    getAllPracticeSets {
      id
      title
      description
    }
  }
`;

export const CREATE_PRACTICE_SET = gql`
  mutation createPracticeSet($data: CreatePracticeSetInput!) {
    createPracticeSet(practiceSetData: $data) {
      id
      title
      description
    }
  }
`;
