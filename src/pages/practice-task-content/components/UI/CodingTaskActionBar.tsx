import { Button } from "@radix-ui/themes";
import Container from "../../../../components/containers/Container";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { GoBug } from "react-icons/go";

function CodingTaskActionBar() {
  const { isCollapsedRight } = useAppSelector(
    (state) => state.codeCompilerPreviewSlice,
  );
  return (
    <div>
      <hr className="h-0.5" />
      <Container
        className={`flex flex-wrap items-center ${isCollapsedRight ? "justify-center" : "justify-between"} gap-2 rounded-none !p-2`}
      >
        <GoBug className="cursor-pointer text-xl text-primary hover:text-blue-500" />
        <div className="flex flex-wrap items-center gap-2">
          <Button
            className={` ${isCollapsedRight ? "w-full" : "w-fit"} cursor-pointer`}
            size="1"
          >
            Run
          </Button>
          <Button
            className={` ${isCollapsedRight ? "w-full" : "w-fit"} cursor-pointer`}
            size="1"
          >
            Submit
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default CodingTaskActionBar;
