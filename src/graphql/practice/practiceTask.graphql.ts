import { gql } from "@apollo/client";

export const GET_ALL_PRACTICE_TASKS = gql`
  query getAllPracticeTasks($practiceSetId: String) {
    getAllPracticeTasks(practiceSetId: $practiceSetId) {
      id
      link
      description
      title
    }
    getAPracticeSet(id: $practiceSetId) {
      id
      title
      description
      user {
        id
      }
    }
  }
`;

export const CREATE_PRACTICE_TASK = gql`
  mutation createPracticeSetTask($data: CreatePracticeTaskInput!) {
    createPracticeTask(practiceTaskData: $data) {
      id
      link
      description
      title
    }
  }
`;

export const UPDATE_PRACTICE_TASK = gql`
  mutation updatePracticeTask($data: UpdatePracticeTaskInput!) {
    updatePracticeTask(practiceTaskData: $data) {
      id
      link
      description
      title
    }
  }
`;

export const DELETE_PRACTICE_TASK = gql`
  mutation deletePracticeTask($id: String) {
    deletePracticeTask(id: $id)
  }
`;
