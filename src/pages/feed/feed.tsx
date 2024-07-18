import UserStatus from "./components/UserStatus";

function Feed() {
  return (
    <div className="flex w-full gap-5">
      {/* LEFT SIDE */}
      <div className="flex h-full w-full p-5">
        <UserStatus />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-shrink-1 h-full w-[50%]"></div>
    </div>
  );
}

export default Feed;
