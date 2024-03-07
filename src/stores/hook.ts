import { useSelector, useDispatch } from "react-redux";

import type { TypedUseSelectorHook } from "react-redux";
import type { AppDispatch, RootState } from "./types";

export const useAllSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();
