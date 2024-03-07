import { Task } from "@/types";
import store from "./store";

export interface TaskState {
  list: Task[];
}

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
