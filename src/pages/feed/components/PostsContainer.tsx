import { useQuery, useSubscription } from "@apollo/client";
import Post from "./Post";
import {
  GET_ALL_POSTS,
  ON_POST_ADD,
  ON_POST_UPDATE,
} from "../../../graphql/feed/post.graphql";
import { useState } from "react";
import { IPost } from "../../../types/feed";

function PostsContainer() {
  const [allPosts, setAllPosts] = useState<IPost[]>([]);

  // Get all posts
  useQuery(GET_ALL_POSTS, {
    onCompleted: (data) => {
      setAllPosts(data.getAllPosts);
    },
  });

  // Subscribe to post add
  useSubscription(ON_POST_ADD, {
    onData: ({ data }) => {
      const response: IPost = data?.data?.onPostAdded;
      setAllPosts((prev) => [response, ...prev]);
    },
  });

  // Subscribe to post update
  useSubscription(ON_POST_UPDATE, {
    onData: ({ data }) => {
      const response: IPost = data?.data?.onPostUpdate;
      setAllPosts((prev) => {
        return prev.map((post) => {
          if (post.id === response.id) {
            return response;
          }
          return post;
        });
      });
    },
  });

  return (
    <>
      {allPosts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </>
  );
}

export default PostsContainer;
