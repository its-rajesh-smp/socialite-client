import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { accordionStates } from "@/constants/common.const";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import {
  setPracticeSetDescAccordionState,
  setPracticeTaskEditing,
} from "@/store/practiceSetTask/slices/practiceTaskActionSlice";
import { IPracticeSet } from "@/types/practice";

import { CheckSquare, Edit2, GitFork, Trash2 } from "lucide-react";

function PracticeCard({
  id,
  title,
  description,
  user,
  onPracticeSetClick,
  onPracticeSetDelete,
  isCurrentUserForked,
}: IPracticeSet) {
  const authenticatedUser = useAppSelector((state) => state.authSlice);
  const isEditable = user?.id === authenticatedUser?.id;
  const dispatch = useAppDispatch();

  /**
   * Function to handle click on practice set
   * @param e - click event
   */
  const onClick = (e: any) => {
    e.stopPropagation();
    onPracticeSetClick?.(id);
    dispatch(setPracticeTaskEditing(false));
    dispatch(setPracticeSetDescAccordionState(accordionStates.collapsed));
  };

  /**
   * Function to handle delete of practice set
   * @param e - click event
   */
  const onDelete = (e: any) => {
    e.stopPropagation();
    onPracticeSetDelete?.(id);
  };
  return (
    <Card
      onClick={onClick}
      key={id}
      className="cursor-pointer overflow-hidden transition-all hover:shadow-lg"
    >
      <div className="flex items-center p-4">
        <div className="flex-1">
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          {isCurrentUserForked && (
            <div>
              <Badge>forked</Badge>
            </div>
          )}
          <div className="flex items-center">
            <GitFork className="mr-1 h-4 w-4" />
            {500}
          </div>
          <div className="flex items-center">
            <CheckSquare className="mr-1 h-4 w-4" />
            {50}
          </div>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            {10}% completed
          </Badge>
        </div>
        <div className="ml-4 flex space-x-1">
          <Button disabled={!isCurrentUserForked} variant="ghost" size="icon">
            <GitFork
              className={`h-4 w-4 ${isCurrentUserForked ? "opacity-100" : "opacity-0"}`}
            />
          </Button>
          <Button disabled={!isEditable} size="icon" variant="ghost">
            <Edit2
              className={`h-4 w-4 ${isEditable ? "opacity-100" : "opacity-0"}`}
            />
          </Button>
          <Button
            onClick={onDelete}
            disabled={!isEditable}
            size="icon"
            variant="ghost"
          >
            <Trash2
              className={`h-4 w-4 ${isEditable ? "opacity-100" : "opacity-0"}`}
            />
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default PracticeCard;
