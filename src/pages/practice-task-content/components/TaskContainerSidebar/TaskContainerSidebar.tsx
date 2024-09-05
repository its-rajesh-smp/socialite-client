import { MdClose, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import Button from "../../../../components/inputs/Button";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { setPracticeSetSidebar } from "../../../../store/practiceTaskContent/practiceTaskContentActionSlice";
import EditTaskAction from "./UI/EditTaskAction";
import SidebarSection from "./UI/SidebarSection";
import taskContainerSidebarSections from "./taskContainerSidebarSections.const";

function TaskContainerSidebar() {
  const dispatch = useAppDispatch();
  const isOpened = useAppSelector(
    (state) => state.practiceTaskContentActionSlice.isSidebarOpened,
  );

  // If sidebar is closed
  if (!isOpened)
    return (
      <div className="absolute right-0 top-0 p-2">
        <Button
          onClick={() => dispatch(setPracticeSetSidebar(true))}
          type="iconButton"
        >
          <MdKeyboardDoubleArrowLeft />
        </Button>
      </div>
    );

  // If sidebar is opened
  return (
    isOpened && (
      <div className="absolute right-0 top-0 flex h-full w-[500px] flex-col gap-4 overflow-hidden rounded-md border bg-primary_selected p-2 shadow-sm transition-all">
        <div className="self-end">
          <Button
            onClick={() => dispatch(setPracticeSetSidebar(false))}
            type="iconButton"
          >
            <MdClose />
          </Button>
        </div>

        <div className="flex h-full flex-col gap-4">
          <div className="flex h-fit w-full flex-col gap-4">
            {Object.values(taskContainerSidebarSections).map((section) => (
              <SidebarSection key={section.title} {...section} />
            ))}
          </div>
          <EditTaskAction />
        </div>
      </div>
    )
  );
}

export default TaskContainerSidebar;
