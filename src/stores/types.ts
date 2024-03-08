import { Task } from "@/types";
import store from "./store";

export interface TaskState {
  loading: boolean;
  list: Task[];
  completedAmount: number;
  totalAmount: number;
}

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
