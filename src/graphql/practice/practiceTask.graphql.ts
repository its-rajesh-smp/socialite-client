import { gql } from "@apollo/client";

export const GET_ALL_PRACTICE_TASKS = gql`
  query getAllPracticeTasks($practiceSetId: String) {
    getAllPracticeTasks(practiceSetId: $practiceSetId) {
      id
      description
      title
      taskType
      submittedAt
      questionLink
      taskTags {
        name
        id
      }
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
      taskType
      questionLink
      taskTags {
        name
        id
      }
      submittedAt
      taskTags {
        id
        name
      }
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
      taskType
      questionLink
      description
      title
      taskTags {
        name
        id
      }
    }
  }
`;

export const UPDATE_PRACTICE_TASK = gql`
  mutation updatePracticeTask($data: UpdatePracticeTaskInput!) {
    updatePracticeTask(practiceTaskData: $data) {
      id
      description
      title
      questionLink
      taskType
      taskTags {
        name
        id
      }
    }
  }
`;

export const DELETE_PRACTICE_TASK = gql`
  mutation deletePracticeTask($id: String) {
    deletePracticeTask(id: $id)
  }
`;
