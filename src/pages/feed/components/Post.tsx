import { Separator } from "@radix-ui/themes";
import Container from "../../../components/containers/Container";
import PostActions from "./UI/PostActions";
import PostHeader from "./UI/PostHeader";
import CommentContainer from "./CommentContainer";

function Post() {
  return (
    <Container>
      <PostHeader />
      <img
        className="mt-4 rounded-xl"
        src="https://demo.foxthemes.net/socialite-v3.0/assets/images/post/img-2.jpg"
      />
      <PostActions />
      <Separator className="mt-4 w-full" />
      <CommentContainer />
    </Container>
  );
}

export default Post;
