import { Skeleton } from "@radix-ui/themes";
import Container from "../../../../components/containers/Container";

function PracticeSetDescriptionSkeleton() {
  return (
    <Container className="flex justify-between gap-4">
      <Skeleton className="h-8 w-1/2" />
      <Skeleton className="h-8 w-10" />
    </Container>
  );
}

export default PracticeSetDescriptionSkeleton;
