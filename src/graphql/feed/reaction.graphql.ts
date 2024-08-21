import { gql } from "@apollo/client";

export const REACT_POST = gql`
  mutation reactPost($data: ReactPostInput) {
    reactPost(reactPostData: $data) {
      id
      reactionType
      operationType
    }
  }
`;
