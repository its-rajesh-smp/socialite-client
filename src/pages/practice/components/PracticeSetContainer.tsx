import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { practiceTaskTabs } from "../../../constants/task.const";
import { DELETE_PRACTICE_SET } from "../../../graphql/practice/practiceSet.graphql";
import authRoutes from "../../../router/paths/auth.routes";
import { IPracticeSet } from "../../../types/practice";
import { generatePathNameWithParams } from "../../../utils/route";
import PracticeCard from "./UI/PracticeSetCard";
import PracticeSetContainerSkeleton from "./UI/PracticeSetContainerSkeleton";

interface IPracticeSetContainerProps {
  practiceSets: IPracticeSet[];
  setPracticeSets: React.Dispatch<React.SetStateAction<any>>;
  loading?: boolean;
}

function PracticeSetContainer({
  practiceSets,
  setPracticeSets,
  loading,
}: IPracticeSetContainerProps) {
  const navigate = useNavigate();
  const [mutateDelete] = useMutation(DELETE_PRACTICE_SET);

  /**
   * Function to handle click on practice set
   * @param e - click event
   */
  const onPracticeSetClick = (practiceSetId: string) => {
    navigate(
      generatePathNameWithParams(authRoutes.PRACTICE_SET_TASKS, {
        practiceSetId,
        taskTabSlug: practiceTaskTabs.all.slug,
      }),
    );
  };

  /**
   * Function to handle delete of practice set
   * @param practiceSetId - practice set id
   */
  const onPracticeSetDelete = async (practiceSetId: string) => {
    try {
      await mutateDelete({
        variables: {
          id: practiceSetId,
        },
      });

      setPracticeSets((prev: IPracticeSet[]) =>
        prev.filter((set) => set.id !== practiceSetId),
      );
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <PracticeSetContainerSkeleton />;

  return (
    <div className="flex flex-col gap-3">
      {practiceSets.map((practiceSet) => (
        <PracticeCard
          onPracticeSetClick={onPracticeSetClick}
          onPracticeSetDelete={onPracticeSetDelete}
          key={practiceSet.id}
          {...practiceSet}
        />
      ))}
    </div>
  );
}

export default PracticeSetContainer;
