import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "@/types";
import type { TaskState } from "@/stores/types";

const initialState: TaskState = {
  loading: false,
  list: [],
  completed: 0,
  total: 0,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTaskList: (state, action: PayloadAction<Task[]>) => {
      return {
        ...state,
        list: action.payload,
        completed: action.payload.filter((ele) => ele.completed).length,
        total: action.payload.length,
      };
    },
    addTask: (state, action: PayloadAction<Task[]>) => {
      return {
        ...state,
        list: action.payload,
      };
    },
    updateStatus: (state, action: PayloadAction<Task>) => {
      const index = state.list.findIndex((ele) => ele.id === action.payload.id);
      const newList = [...state.list];
      if (index !== -1) newList[index] = { ...action.payload };
      return {
        ...state,
        list: [...newList],
      };
    },
  },
});

export const { setTaskList, addTask, updateStatus } = taskSlice.actions;

export default taskSlice.reducer;
