import { Skeleton } from "@radix-ui/themes";
import Container from "../../../../components/containers/Container";

function PracticeSetTabsSkeleton() {
  return (
    <Container className="flex justify-between">
      <div className="flex gap-5">
        <Skeleton className="h-10 w-32"></Skeleton>
        <Skeleton className="h-10 w-32"></Skeleton>
        <Skeleton className="h-10 w-32"></Skeleton>
      </div>
      <Skeleton className="h-10 w-32"></Skeleton>
    </Container>
  );
}

export default PracticeSetTabsSkeleton;
