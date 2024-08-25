import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { DELETE_PRACTICE_SET } from "../../../graphql/practice/practiceSet.graphql";
import authRoutes from "../../../router/paths/auth.routes";
import { IPracticeSet } from "../../../types/practice";
import { generatePathNameWithParams } from "../../../utils/route";
import PracticeSet from "./UI/PracticeSet";

interface IPracticeSetContainerProps {
  practiceSets: IPracticeSet[];
  setPracticeSets: React.Dispatch<React.SetStateAction<any>>;
}

function PracticeSetContainer({
  practiceSets,
  setPracticeSets,
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

  return (
    <div className="flex flex-col gap-3">
      {practiceSets.map((practiceSet) => (
        <PracticeSet
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
