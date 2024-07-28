import { useSubscription } from "@apollo/client";
import Post from "./Post";
import { ON_NEW_FEED_POST_ADDED_SUBSCRIPTION } from "../../../graphql/feed.graphql";

function PostsContainer() {
  const { error, loading, data } = useSubscription(
    ON_NEW_FEED_POST_ADDED_SUBSCRIPTION,
  );
  console.log(data);
  console.log(loading);
  console.log(error);
  return (
    <>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </>
  );
}

export default PostsContainer;
