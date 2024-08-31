import { Skeleton } from "@radix-ui/themes";
import Container from "../../../../components/containers/Container";

function PracticeSetSkeleton() {
  return (
    <Container className="flex h-36 flex-col gap-2">
      <div className="flex justify-between">
        <Skeleton className="h-10 w-1/5"></Skeleton>
        <div className="flex gap-4">
          <Skeleton className="h-10 w-20"></Skeleton>
          <Skeleton className="h-10 w-20"></Skeleton>
          <Skeleton className="h-10 w-20"></Skeleton>
        </div>
      </div>
      <Skeleton className="shrink-1 h-5 w-56"></Skeleton>
      <Skeleton className="shrink-1 h-5 w-20"></Skeleton>
      <div className="shrink-1 flex justify-between gap-4">
        <Skeleton className="h-5 w-2/5"></Skeleton>
        <Skeleton className="h-5 w-1/5"></Skeleton>
      </div>
    </Container>
  );
}

export default PracticeSetSkeleton;
