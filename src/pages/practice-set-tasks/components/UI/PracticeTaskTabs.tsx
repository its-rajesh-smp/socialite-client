import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import authRoutes from "@/router/paths/auth.routes";
import { setCurrentPracticeTaskTab } from "@/store/practiceSetTask/slices/practiceTaskTabSlice";
import { generatePathNameWithParams } from "@/utils/route";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { practiceTaskTabs } from "../../../../constants/task.const";
import CreateNewTaskBtn from "./CreateNewTaskBtn";

function PracticeTaskTabs() {
  const [tag, setTag] = useState("All");
  const allTags = ["All", "Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"];

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const onTabClick = (tab: any) => {
    dispatch(setCurrentPracticeTaskTab(tab));
    console.log({
      practiceSetId: params.practiceSetId,
      taskTabSlug: tab.slug,
    });
    navigate(
      generatePathNameWithParams(authRoutes.PRACTICE_SET_TASKS, {
        practiceSetId: params.practiceSetId,
        taskTabSlug: tab.slug,
      }),
    );
  };

  return (
    <div className="flex items-center justify-between">
      <Tabs defaultValue="all" className="w-full sm:w-auto">
        <TabsList className="grid w-full grid-cols-4 bg-transparent">
          {Object.values(practiceTaskTabs).map((tab) => (
            <TabsTrigger
              value={tab.slug}
              onClick={() => onTabClick(tab)}
              className="data-[state=active]:bg-black data-[state=active]:text-white"
            >
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <div className="flex gap-3">
        <Select onValueChange={(value: string) => setTag(value)} value={tag}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by tag" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Filter by tag</SelectLabel>
              <SelectItem value="all">All Tags</SelectItem>
              {allTags.map((tag) => (
                <SelectItem key={tag} value={tag}>
                  {tag}
                </SelectItem>
              ))}
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Filter by default</SelectLabel>
              <SelectItem value="easy">Easy</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="hard">Hard</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <CreateNewTaskBtn />
      </div>
    </div>
  );
}

export default PracticeTaskTabs;
