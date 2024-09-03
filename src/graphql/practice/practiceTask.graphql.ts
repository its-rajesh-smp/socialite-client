import { gql } from "@apollo/client";

export const GET_ALL_PRACTICE_TASKS = gql`
  query getAllPracticeTasks($practiceSetId: String) {
    getAllPracticeTasks(practiceSetId: $practiceSetId) {
      id
      description
      title
      submittedAt
      userTaskMetadata {
        isBookmarked
        note
        submissionCount
      }
    }
    getAPracticeSet(id: $practiceSetId) {
      id
      title
      description
      isCurrentUserForked
      user {
        id
      }
    }
  }
`;

export const GET_A_PRACTICE_TASK = gql`
  query getAPracticeTask($id: String) {
    getAPracticeTask(id: $id) {
      id
      description
      title
      submittedAt
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

      description
      title
    }
  }
`;

export const UPDATE_PRACTICE_TASK = gql`
  mutation updatePracticeTask($data: UpdatePracticeTaskInput!) {
    updatePracticeTask(practiceTaskData: $data) {
      id
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
