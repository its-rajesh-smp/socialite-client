import { gql } from "@apollo/client";

export const CREATE_FEED_POST_MUTATION = gql`
  mutation createPost($createPostInput: CreatePostInput) {
    createPost(createPostInput: $createPostInput) {
      text
      User {
        id
        name
        email
      }
    }
  }
`;

export const ON_NEW_FEED_POST_ADDED_SUBSCRIPTION = gql`
  subscription onPostAdded {
    onPostAdded {
      text
      User {
        id
        name
        email
      }
    }
  }
`;
