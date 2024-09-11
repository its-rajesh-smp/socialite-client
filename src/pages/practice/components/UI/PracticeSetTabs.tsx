import { useNavigate } from "react-router-dom";
import Container from "../../../../components/containers/Container";
import { practiceTabs } from "../../../../constants/practice.const";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { setCurrentPracticeSetTab } from "../../../../store/practiceSet/practiceSetTabSlice";
import PracticeSetTabsSkeleton from "./PracticeSetTabsSkeleton";
import Button from "../../../../components/inputs/Button";

interface IPracticeSetTabs {
  loading?: boolean;
}

function PracticeSetTabs({ loading }: IPracticeSetTabs) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onButtonClick = (tab: any) => {
    dispatch(setCurrentPracticeSetTab(tab));
    navigate(`/practice/${tab.slug}`);
  };

  if (loading) {
    return <PracticeSetTabsSkeleton />;
  }

  return (
    <Container className="flex justify-between">
      <div className="flex gap-5">
        {Object.values(practiceTabs).map((tab) => (
          <Button
            color="indigo"
            onClick={() => onButtonClick(tab)}
            key={tab.id}
          >
            {tab.name}
          </Button>
        ))}
      </div>
    </Container>
  );
}

export default PracticeSetTabs;
