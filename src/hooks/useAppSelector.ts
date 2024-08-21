import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

// Use instead of plain `useSelector`
export const useAppSelector = useSelector.withTypes<RootState>();
