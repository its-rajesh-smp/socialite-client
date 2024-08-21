import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query getAllPosts {
    getAllPosts {
      text
      id
      totalLikeCount
      totalCommentCount
      isCurrentUserReacted
      comments {
        id
        text
        user {
          id
          name
          email
        }
      }
      user {
        id
        name
        email
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($data: CreatePostInput) {
    createPost(postData: $data) {
      text
      totalLikeCount
      totalCommentCount
      user {
        id
        name
        email
      }
    }
  }
`;

export const ON_POST_ADD = gql`
  subscription onPostAdd {
    onPostAdd {
      text
      id
      totalLikeCount
      totalCommentCount
      user {
        id
        name
        email
      }
    }
  }
`;

export const ON_POST_UPDATE = gql`
  subscription onPostUpdate {
    onPostUpdate {
      text
      id
      totalLikeCount
      totalCommentCount
      comments {
        id
        text
        user {
          id
          name
          email
        }
      }
      user {
        id
        name
        email
      }
    }
  }
`;
