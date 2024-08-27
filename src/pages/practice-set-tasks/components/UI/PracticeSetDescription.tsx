import { useMutation } from "@apollo/client";
import * as Accordion from "@radix-ui/react-accordion";
import { BiEdit } from "react-icons/bi";
import {
  MdKeyboardArrowDown,
  MdOutlineAssignmentReturned,
  MdOutlineSave,
} from "react-icons/md";
import { toast } from "react-toastify";
import Container from "../../../../components/containers/Container";
import IconButton from "../../../../components/inputs/IconButton";
import Chip from "../../../../components/others/Chip";
import { accordionStates } from "../../../../constants/common.const";
import { FORK_PRACTICE_SET } from "../../../../graphql/practice/userPracticeSet.graphql";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { updateCurrentPracticeSet } from "../../../../store/practiceSetTask/practiceSetTaskSlice";
import {
  setPracticeSetDescAccordionState,
  toggleEditing,
} from "../../../../store/practiceSetTask/practiceTaskActionSlice";

function PracticeSetDescription() {
  const authenticatedUser = useAppSelector((state) => state.authSlice);
  const { currentPracticeSet } = useAppSelector(
    (state) => state.practiceSetTaskSlice,
  );
  const { editing, practiceSetDescAccordionState } = useAppSelector(
    (state) => state.practiceTaskActionSlice,
  );
  const dispatch = useAppDispatch();
  const [mutateFork, { loading: forkLoading }] = useMutation(FORK_PRACTICE_SET);
  const isEditable = currentPracticeSet?.user?.id === authenticatedUser?.id;
  const isForked = currentPracticeSet?.isCurrentUserForked;

  /**
   * Function to handle edit button click
   * @param e  - click event
   */
  const onEditBtnClick = (e: any) => {
    e.stopPropagation();
    dispatch(toggleEditing());
  };

  /**
   * Function to handle fork button click
   * @param e  - click event
   */
  const onForkBtnClick = (e: any) => {
    e.stopPropagation();
    mutateFork({
      variables: {
        practiceSetId: currentPracticeSet?.id,
      },
      onCompleted: () => {
        dispatch(
          updateCurrentPracticeSet({
            isCurrentUserForked: true,
          }),
        );
        toast.success(
          "Forked successfully: Now you can do tasks from this practice set",
        );
      },
    });
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
              {!isForked ? (
                <IconButton loading={forkLoading} onClick={onForkBtnClick}>
                  <MdOutlineAssignmentReturned />
                </IconButton>
              ) : (
                <Chip>Forked</Chip>
              )}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </Container>
  );
}

export default PracticeSetDescription;
