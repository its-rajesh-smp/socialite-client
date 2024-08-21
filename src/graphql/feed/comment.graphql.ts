import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
  mutation createComment($data: CreateCommentInput) {
    createComment(commentData: $data) {
      text
      id
      user {
        id
        name
        email
      }
    }
  }
`;
