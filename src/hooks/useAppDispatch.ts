import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";

// Use instead of plain `useDispatch`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
