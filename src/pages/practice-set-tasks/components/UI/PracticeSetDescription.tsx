import { Button } from "@/components/ui/button";
import * as Accordion from "@radix-ui/react-accordion";
import { BiEdit } from "react-icons/bi";
import { MdKeyboardArrowDown, MdOutlineSave } from "react-icons/md";
import Container from "../../../../components/containers/Container";
import { accordionStates } from "../../../../constants/common.const";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import {
  setPracticeSetDescAccordionState,
  toggleEditing,
} from "../../../../store/practiceSetTask/slices/practiceTaskActionSlice";
import PracticeSetDescriptionSkeleton from "./PracticeSetDescriptionSkeleton";
import PracticeSetProgress from "./PracticeSetProgress";

interface IPracticeSetDescriptionProps {
  loading?: boolean;
}

function PracticeSetDescription({ loading }: IPracticeSetDescriptionProps) {
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
   * Function to handle edit button click
   * @param e  - click event
   */
  const onEditBtnClick = (e: any) => {
    e.stopPropagation();
    dispatch(toggleEditing());
  };

  if (loading) {
    return <PracticeSetDescriptionSkeleton />;
  }

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
            <Accordion.Trigger className="flex w-full flex-col gap-2 text-left">
              <div className="flex w-full justify-between">
                <h1 className="text-xl font-bold">
                  {currentPracticeSet?.title}
                </h1>
                {isEditable && (
                  <Button
                    variant="outline"
                    size="icon"
                    className="text-lg"
                    onClick={onEditBtnClick}
                  >
                    {editing ? <MdOutlineSave /> : <BiEdit />}
                  </Button>
                )}
              </div>
              <PracticeSetProgress
                expand={
                  practiceSetDescAccordionState === accordionStates.expanded
                }
              />
              <div className="flex w-fit cursor-pointer items-center gap-3 text-sm">
                <p className="text-primary">Show description</p>
                <MdKeyboardArrowDown
                  className={`transition-all ${practiceSetDescAccordionState === accordionStates.expanded ? "rotate-180" : ""}`}
                />
              </div>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
            <p className="mt-2 text-xs text-gray-600">
              {currentPracticeSet?.description}
            </p>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </Container>
  );
}

export default PracticeSetDescription;
