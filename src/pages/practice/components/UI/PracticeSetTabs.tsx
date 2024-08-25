import { Button } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import Container from "../../../../components/containers/Container";
import { practiceTabs } from "../../../../constants/practice.const";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { setCurrentPracticeSetTab } from "../../../../store/practiceSet/practiceSetTabSlice";

function PracticeSetTabs() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onButtonClick = (tab: any) => {
    dispatch(setCurrentPracticeSetTab(tab));
    navigate(`/practice/${tab.slug}`);
  };

  return (
    <Container className="flex justify-between">
      <div className="flex gap-5">
        {Object.values(practiceTabs).map((tab) => (
          <Button onClick={() => onButtonClick(tab)} key={tab.id}>
            {tab.name}
          </Button>
        ))}
      </div>
      <div>
        <Button>Practice Today</Button>
      </div>
    </Container>
  );
}

export default PracticeSetTabs;
