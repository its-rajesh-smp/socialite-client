import { gql } from "@apollo/client";

export const GetPracticeSetTasks = gql`
  query getAllPracticeTasks($practiceSetId: String) {
    getAllPracticeTasks(practiceSetId: $practiceSetId) {
      id
      link
      description
      title
    }
  }
`;

export const CreatePracticeSetTask = gql`
  mutation createPracticeSetTask($data: CreatePracticeTaskInput!) {
    createPracticeTask(createPracticeTaskInput: $data) {
      id
      link
      description
      title
    }
  }
`;

export const UpdatePracticeSetTask = gql`
  mutation updatePracticeSetTask(
    $updatePracticeSetTask: UpdatePracticeSetTaskInput!
  ) {
    updatePracticeTask(updatePracticeSetTask: $updatePracticeSetTask) {
      id
      link
      description
      title
    }
  }
`;

export const DeletePracticeSetTask = gql`
  mutation deletePracticeSetTask($id: string) {
    deletePracticeTask(practiceSetId: $id)
  }
`;
