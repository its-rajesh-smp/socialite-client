import { useSubscription } from "@apollo/client";
import Post from "./Post";
import { ON_NEW_FEED_POST_ADDED_SUBSCRIPTION } from "../../../graphql/feed.graphql";
import { useState } from "react";
import { IPost } from "../../../types/feed";

function PostsContainer() {
  const [allPosts, setAllPosts] = useState<IPost[]>([]);

  useSubscription(ON_NEW_FEED_POST_ADDED_SUBSCRIPTION, {
    onData: ({ data }) => {
      const response: IPost = data?.data?.onPostAdded;
      console.log(response);
      setAllPosts((prev) => [response, ...prev]);
    },
  });

  return (
    <>
      {allPosts.map((post) => (
        <Post key={post.id} />
      ))}
    </>
  );
}

export default PostsContainer;
