import practiceTaskContentActionSlice from "../practiceTaskContent/practiceTaskContentActionSlice";
import practiceTaskContentSlice from "../practiceTaskContent/practiceTaskContentSlice";
import practiceTaskActionSlice from "./slices/practiceTaskActionSlice";
import taskTagSlice from "./slices/taskTagSlice";

const taskSlice = {
  practiceTaskActionSlice,
  practiceTaskContentSlice,
  practiceTaskContentActionSlice,
  taskTagSlice,
};

export default taskSlice;
