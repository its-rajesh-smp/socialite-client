import { gql } from "@apollo/client";

export const GET_ALL_PRACTICE_SETS = gql`
  query {
    getAllPracticeSets {
      id
      title
      description
      user {
        id
      }
    }
  }
`;

export const GET_MY_PRACTICE_SETS = gql`
  query {
    getMyPracticeSets {
      id
      title
      description
      user {
        id
      }
    }
  }
`;

export const CREATE_PRACTICE_SET = gql`
  mutation createPracticeSet($data: CreatePracticeSetInput!) {
    createPracticeSet(practiceSetData: $data) {
      id
      title
      description
      user {
        id
      }
    }
  }
`;

export const DELETE_PRACTICE_SET = gql`
  mutation deletePracticeSet($id: String) {
    deletePracticeSet(id: $id)
  }
`;
