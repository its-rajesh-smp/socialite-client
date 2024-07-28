import { gql } from "@apollo/client";

export const CREATE_FEED_POST_MUTATION = gql`
  mutation createPost($createPostInput: CreatePostInput) {
    createPost(createPostInput: $createPostInput) {
      text
    }
  }
`;
