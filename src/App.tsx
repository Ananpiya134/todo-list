import axios from "@services/axios";
import { useState, useEffect } from "react";

import { TodoItem } from "./components/todo-item";
import { Container } from "@/components/container";
import { ProgressBar } from "@/components/progress-bar";
import { Select } from "@components/select";
import { Typography } from "@/components/typography";

import { filterOptions } from "@/configs/constants";

import { useAppDispatch, useAppSelector } from "./stores";
import {
  setTaskList,
  setTaskListOnFilter,
  updateStatus,
} from "@/stores/slices/taskSlice";

import type { Option, Task } from "@/types";
import type { OptionValue } from "@components/select";

function App() {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<Option>(
    filterOptions.ALL
  );

  const {
    completedAmount,
    list: todoList,
    totalAmount,
  } = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();

  const onClickDropdown = () => setOpenDropdown((prev) => !prev);

  const handleSelectChange = (value: OptionValue) => {
    setSelectedFilter(filterOptions[value]);
  };

  const toggleCompleted = async (id: string) => {
    const task = todoList.find((ele) => ele.id === id);
    if (task) {
      const newTask: Task = {
        ...task,
        completed: !task?.completed,
      };
      const response = await axios.put(`/todos/${id}`, newTask);

      if (response.status === 200) {
        dispatch(updateStatus(newTask));
      }
    }
  };

  const fetch = async () => {
    const response = await axios.get("/todos");
    if (response.status === 200) {
      dispatch(setTaskList(response.data));
    }
  };

  const fetchOnFilter = async (queryParams: string) => {
    const response = await axios.get(`/todos?${queryParams}`);
    if (response.status === 200) dispatch(setTaskListOnFilter(response.data));
  };

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selectedFilter.value === filterOptions.ALL.value) fetchOnFilter("");
    if (selectedFilter.value === filterOptions.DONE.value)
      fetchOnFilter("completed=true");
    if (selectedFilter.value === filterOptions.UNDONE.value)
      fetchOnFilter("completed=false");

    setOpenDropdown(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilter]);

  return (
    <div className="bg-screen w-full h-screen pt-42">
      <Container className="rounded-20">
        <ProgressBar completed={completedAmount} total={totalAmount} />
        <div className="w-full flex justify-between items-center mb-16">
          <Typography variant="heading-2-black">Tasks</Typography>
          <Select
            open={openDropdown}
            onClick={onClickDropdown}
            optionList={Object.values(filterOptions)}
            selected={selectedFilter}
            handleChange={handleSelectChange}
          />
        </div>
        <div className="flex flex-column gap-16">
          {todoList.map(({ id, title, completed }) => {
            return (
              <TodoItem
                id={id}
                key={id}
                title={title}
                completed={completed}
                toggleCompleted={toggleCompleted}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default App;
