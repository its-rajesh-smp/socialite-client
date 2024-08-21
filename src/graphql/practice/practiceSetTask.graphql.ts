import { gql } from "@apollo/client";

export const GET_ALL_PRACTICE_TASKS = gql`
  query getAllPracticeTasks($id: String) {
    getAllPracticeTasks(practiceSetId: $id) {
      id
      link
      description
      title
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
