import * as Accordion from "@radix-ui/react-accordion";
import { BiEdit } from "react-icons/bi";
import {
  MdKeyboardArrowDown,
  MdOutlineAssignmentReturned,
  MdOutlineSave,
} from "react-icons/md";
import Container from "../../../../components/containers/Container";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import {
  setPracticeSetDescAccordionState,
  toggleEditing,
} from "../../../../store/practiceSetTask/practiceTaskActionSlice";
import { accordionStates } from "../../../../constants/common.const";

function PracticeSetDescription() {
  const authenticatedUser = useAppSelector((state) => state.authSlice);
  const { currentPracticeSet } = useAppSelector(
    (state) => state.practiceSetTaskSlice,
  );
  const { editing, practiceSetDescAccordionState } = useAppSelector(
    (state) => state.practiceTaskActionSlice,
  );
  const dispatch = useAppDispatch();
  const isEditable = currentPracticeSet?.user?.id === authenticatedUser?.id;

  /**
   * Function to handle click on edit button
   * @param e  - click event
   */
  const onEditBtnClick = (e: any) => {
    e.stopPropagation();
    dispatch(toggleEditing());
  };

  return (
    <Container>
      <Accordion.Root
        type="single"
        value={practiceSetDescAccordionState}
        onValueChange={(value) => {
          dispatch(setPracticeSetDescAccordionState(value));
        }}
        collapsible
      >
        <Accordion.Item className="!mt-0" value={accordionStates.expanded}>
          <Accordion.Header>
            <Accordion.Trigger className="flex h-full w-full items-center justify-between text-left">
              <h1 className="text-xl font-bold">{currentPracticeSet?.title}</h1>
              <MdKeyboardArrowDown className="cursor-pointer transition-all hover:text-primary" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
            <div>{currentPracticeSet?.description}</div>
            <div className="flex items-center justify-end gap-3">
              {isEditable && (
                <>
                  <BiEdit
                    onClick={onEditBtnClick}
                    className={`cursor-pointer text-2xl transition-all ${editing ? "text-blue-500" : "text-primary"} hover:text-blue-500`}
                  />
                  <MdOutlineSave className="cursor-pointer text-2xl text-primary transition-all hover:text-blue-500" />
                </>
              )}
              <MdOutlineAssignmentReturned className="cursor-pointer text-2xl text-primary transition-all hover:text-blue-500" />
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </Container>
  );
}

export default PracticeSetDescription;
