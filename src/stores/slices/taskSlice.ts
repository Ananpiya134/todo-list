import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "@/types";
import type { TaskState } from "../types";

const initialState: TaskState = {
  list: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task[]>) => {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
});

export default taskSlice.reducer;
