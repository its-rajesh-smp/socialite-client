import Container from "../../../components/containers/Container";
import People from "./UI/People";

function PeopleYouMayNow() {
  return (
    <Container className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold">People you may know</h3>
        <p className="cursor-pointer text-sm text-blue-500">See all</p>
      </div>
      <div className="flex flex-col gap-3">
        <People />
        <People />
        <People />
      </div>
    </Container>
  );
}

export default PeopleYouMayNow;
