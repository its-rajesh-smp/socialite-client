import { Separator } from "@radix-ui/themes";
import Container from "../../../components/containers/Container";
import PostActions from "./UI/PostActions";
import PostHeader from "./UI/PostHeader";
import CommentContainer from "./CommentContainer";
import { IPost } from "../../../types/feed";

function Post({
  User,
  text,
  image,
  id,
  like,
  comment,
  isCurrentUserReacted,
  NewsPostComments,
}: IPost) {
  return (
    <Container>
      <PostHeader {...User} />
      {image && <img className="mt-4 rounded-xl" src={image} />}
      {text && <p className="mt-4">{text}</p>}
      <PostActions
        isUserLiked={isCurrentUserReacted}
        totalLikeCount={like}
        totalCommentCount={comment}
        postId={id}
      />
      <Separator className="mt-4 w-full" />
      <CommentContainer comments={NewsPostComments} postId={id} />
    </Container>
  );
}

export default Post;
