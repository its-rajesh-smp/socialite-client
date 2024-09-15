import { BiLogOut } from "react-icons/bi";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { logoutUser } from "../../store/auth/actions/logoutAction";
import DropDownMenu from "../others/DropDownMenu";
import UserAvatar from "./UserAvatar";

function ActionBar() {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center gap-3">
      {/* <Avatar
        radius="full"
        className="cursor-pointer bg-[#F1F5F9]"
        fallback={<BsPlusLg className="text-xl text-primary" />}
      />
      <Avatar
        radius="full"
        className="cursor-pointer bg-[#F1F5F9]"
        fallback={<FaBell className="text-xl text-primary" />}
      />
      <Avatar
        radius="full"
        className="h-9 w-9 cursor-pointer bg-[#F1F5F9]"
        fallback={
          <BiSolidMessageSquareDetail className="text-xl text-primary" />
        }
      /> */}
      <DropDownMenu
        menuIcon={
          <div>
            <UserAvatar />
          </div>
        }
      >
        <p
          onClick={() => dispatch(logoutUser())}
          className="flex cursor-pointer items-center gap-2 rounded-md px-4 py-2 text-sm hover:bg-gray-100"
        >
          <BiLogOut className="text-xl text-primary" /> Logout
        </p>
      </DropDownMenu>
    </div>
  );
}

export default ActionBar;
