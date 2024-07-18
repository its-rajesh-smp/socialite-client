import CreatePost from "./components/CreatePost";
import UserStatus from "./components/UserStatus";

function Feed() {
  return (
    <div className="flex w-full justify-center gap-5">
      {/* LEFT SIDE */}
      <div className="flex h-full w-full flex-col items-center justify-center p-5">
        <UserStatus />
        <div className="flex w-[70%] justify-center gap-10 pt-10">
          <CreatePost />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-shrink-1 h-full w-[50%]"></div>
    </div>
  );
}

export default Feed;
