import { Skeleton } from "@radix-ui/themes";
import Container from "../../../../components/containers/Container";

function PracticeTaskSkeleton() {
  return (
    <Container className="flex justify-between">
      <Skeleton className="h-5 w-1/2" />
      <div className="flex gap-5">
        <Skeleton className="h-5 w-5" />
        <Skeleton className="h-5 w-5" />
        <Skeleton className="h-5 w-5" />
      </div>
    </Container>
  );
}

export default PracticeTaskSkeleton;
