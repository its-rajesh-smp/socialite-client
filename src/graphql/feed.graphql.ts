import { gql } from "@apollo/client";

export const GET_FEED_POSTS = gql`
  query getFeedPosts {
    getFeedPosts {
      text
      id
      like
      comment
      isCurrentUserReacted
      NewsPostComments {
        id
        text
        User {
          id
          name
          email
        }
      }
      User {
        id
        name
        email
      }
    }
  }
`;

export const CREATE_FEED_POST_MUTATION = gql`
  mutation createPost($createPostInput: CreatePostInput) {
    createPost(createPostInput: $createPostInput) {
      text
      like
      comment
      User {
        id
        name
        email
      }
    }
  }
`;

export const REACT_TO_POST_MUTATION = gql`
  mutation reactPost($reactPostInput: ReactPostInput) {
    reactPost(reactPostInput: $reactPostInput) {
      id
      reactionType
      operationType
    }
  }
`;

export const ON_NEW_FEED_POST_ADDED_SUBSCRIPTION = gql`
  subscription onPostAdded {
    onPostAdded {
      text
      id
      like
      comment
      User {
        id
        name
        email
      }
    }
  }
`;

export const ON_NEW_FEED_POST_UPDATE_SUBSCRIPTION = gql`
  subscription onPostUpdate {
    onPostUpdate {
      text
      id
      like
      comment
      NewsPostComments {
        id
        text
        User {
          id
          name
          email
        }
      }
      User {
        id
        name
        email
      }
    }
  }
`;

export const ON_NEW_FEED_COMMENT_CREATE_SUBSCRIPTION = gql`
  subscription onCommentAdded {
    onCommentAdded {
      text
      id
      like
      comment
      NewsPostComments {
        id
        text
        User {
          id
          name
          email
        }
      }
      User {
        id
        name
        email
      }
    }
  }
`;

export const ON_REACT_POST_SUBSCRIPTION = gql`
  subscription onPostReact {
    onPostReact {
      text
      id
      like
      NewsPostComments {
        id
        text
        User {
          id
          name
          email
        }
      }
    }
  }
`;

export const CREATE_NEW_COMMENT_MUTATION = gql`
  mutation createComment($createCommentInput: CreateCommentInput) {
    createComment(createCommentInput: $createCommentInput) {
      text
      id
      User {
        id
        name
        email
      }
    }
  }
`;
