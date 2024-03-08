import { Task } from "@/types";
import store from "./store";

export interface TaskState {
  loading: boolean;
  list: Task[];
  completed: number;
  total: number;
}

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
