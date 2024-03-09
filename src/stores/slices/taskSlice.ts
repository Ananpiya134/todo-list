import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "@/types";
import type { TaskState } from "@/stores/types";

const initialState: TaskState = {
  loading: false,
  list: [],
  completedAmount: 0,
  totalAmount: 0,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      const newList = [...state.list, action.payload];
      return {
        ...state,
        list: newList,
        totalAmount: state.totalAmount + 1,
      };
    },
    deleteTask: (
      state,
      action: PayloadAction<Pick<Task, "id" | "completed">>
    ) => {
      const newList = [...state.list].filter(
        (ele) => ele.id !== action.payload.id
      );
      const newCompletedAmount = action.payload.completed
        ? state.completedAmount - 1
        : state.completedAmount;

      console.log(newCompletedAmount);
      return {
        ...state,
        list: newList,
        completedAmount: newCompletedAmount,
        totalAmount: state.totalAmount - 1,
      };
    },
    editTaskTitle: (state, action: PayloadAction<Task>) => {
      const index = state.list.findIndex((ele) => ele.id === action.payload.id);

      if (index !== -1) {
        const newList = [...state.list];
        newList[index] = { ...action.payload };
        return {
          ...state,
          list: newList,
        };
      }
    },
    setTaskList: (state, action: PayloadAction<Task[]>) => {
      return {
        ...state,
        list: action.payload,
        completedAmount: action.payload.filter((ele) => ele.completed).length,
        totalAmount: action.payload.length,
      };
    },
    setTaskListOnFilter: (state, action: PayloadAction<Task[]>) => {
      return {
        ...state,
        list: [...action.payload],
      };
    },
    updateStatus: (state, action: PayloadAction<Task>) => {
      const index = state.list.findIndex((ele) => ele.id === action.payload.id);
      const newList = [...state.list];
      if (index !== -1) {
        newList[index] = { ...action.payload };
      }

      return {
        ...state,
        list: [...newList],
        completedAmount: action.payload.completed
          ? state.completedAmount + 1
          : state.completedAmount - 1,
      };
    },
  },
});

export const {
  addTask,
  editTaskTitle,
  deleteTask,
  setTaskList,
  setTaskListOnFilter,
  updateStatus,
} = taskSlice.actions;

export default taskSlice.reducer;
