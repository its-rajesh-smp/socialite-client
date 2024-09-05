import gql from "graphql-tag";

export const GET_ALL_TASK_TAGS = gql`
  query getAllTaskTags {
    getTags {
      id
      name
    }
  }
`;

export const CREATE_A_TASK_TAG = gql`
  mutation createATaskTag($data: TaskTagInput) {
    createATaskTag(tagData: $data) {
      id
      name
    }
  }
`;
