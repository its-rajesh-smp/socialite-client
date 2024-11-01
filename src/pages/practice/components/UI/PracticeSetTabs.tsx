import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { practiceTabs } from "../../../../constants/practice.const";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { setCurrentPracticeSetTab } from "../../../../store/practiceSet/practiceSetTabSlice";

function PracticeSetTabs({ rightSide }: any) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onTabClick = (tab: any) => {
    dispatch(setCurrentPracticeSetTab(tab));
    navigate(`/practice/${tab.slug}`);
  };

  return (
    <div className="m-2 flex flex-col gap-5 md:flex-row">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full md:w-fit">
          {Object.values(practiceTabs).map((tab) => (
            <TabsTrigger
              className="w-full md:w-fit"
              onClick={() => onTabClick(tab)}
              key={tab.id}
              value={tab.slug}
            >
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      {rightSide}
    </div>
  );
}

export default PracticeSetTabs;
