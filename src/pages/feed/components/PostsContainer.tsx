import { useQuery, useSubscription } from "@apollo/client";
import Post from "./Post";
import {
  GET_FEED_POSTS,
  ON_NEW_FEED_POST_ADDED_SUBSCRIPTION,
  ON_NEW_FEED_POST_UPDATE_SUBSCRIPTION,
} from "../../../graphql/feed.graphql";
import { useState } from "react";
import { IPost } from "../../../types/feed";

function PostsContainer() {
  const [allPosts, setAllPosts] = useState<IPost[]>([]);

  // FETCH ALL POSTS
  useQuery(GET_FEED_POSTS, {
    onCompleted: (data) => {
      console.log(data.getFeedPosts);
      setAllPosts(data.getFeedPosts);
    },
  });

  // SUBSCRIPTION FOR NEW POST
  useSubscription(ON_NEW_FEED_POST_ADDED_SUBSCRIPTION, {
    onData: ({ data }) => {
      const response: IPost = data?.data?.onPostAdded;
      console.log(response);
      setAllPosts((prev) => [response, ...prev]);
    },
  });

  // SUBSCRIPTION FOR UPDATE OF POST
  useSubscription(ON_NEW_FEED_POST_UPDATE_SUBSCRIPTION, {
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

  // SUBSCRIPTION FOR POST LIKE

  // SUBSCRIPTION FOR POST COMMENT
  return (
    <>
      {allPosts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </>
  );
}

export default PostsContainer;
