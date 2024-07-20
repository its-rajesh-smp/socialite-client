import CreatePost from "./components/CreatePost";
import Post from "./components/Post";
import PeopleYouMayNow from "./components/UI/PeopleYouMayNow";
import UserStatus from "./components/UserStatus";

function Feed() {
  return (
    <div className="flex w-full justify-center gap-5">
      {/* LEFT SIDE */}
      <div className="flex h-full w-full flex-col items-center justify-center p-5">
        <UserStatus />
        <div className="flex w-[70%] flex-col justify-center gap-8 pt-10">
          <CreatePost />
          <Post />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-shrink-1 mr-10 h-full w-[50%]">
        <PeopleYouMayNow />
      </div>
    </div>
  );
}

export default Feed;
