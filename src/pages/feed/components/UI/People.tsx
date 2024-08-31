import { Avatar, Button } from "@radix-ui/themes";

function People() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-3">
        <Avatar
          fallback
          src="https://demo.foxthemes.net/socialite-v3.0/assets/images/avatars/avatar-2.jpg"
          radius="full"
        />
        <div>
          <p className="text-sm font-medium">Jhon Doe</p>
          <p className="text-xs font-medium text-[#858C97]">125k Following</p>
        </div>
      </div>
      <Button className="w-fit bg-[#E0F2FE] text-xs text-[#359DD4]">
        Follow
      </Button>
    </div>
  );
}

export default People;
