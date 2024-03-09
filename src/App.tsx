import axios from "@services/axios";
import { useState, useEffect, ChangeEventHandler } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

import { Container } from "@/components/container";
import { ProgressBar } from "@/components/progress-bar";
import { Select } from "@components/select";
import { TodoItem } from "@/components/todo-item";
import { TodoNew } from "@components/todo-new";
import { Typography } from "@/components/typography";

import { filterOptions } from "@/configs/constants";

import { useAppDispatch, useAppSelector } from "./stores";
import {
  addTask,
  updateStatus,
  setTaskList,
  setTaskListOnFilter,
  editTaskTitle,
  deleteTask,
} from "@/stores/slices/taskSlice";

import type { Option, Task } from "@/types";
import type { OptionValue } from "@components/select";
import type { DropdownProps } from "@components/dropdown";

function App() {
  const [currentEditId, setCurrentEditId] = useState<string | null>(null);

  const [newTodoValue, setNewTodoValue] = useState<string>("");
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
  const onClickCancelEdit = () => setCurrentEditId(null);
  const handleNewTodoValueChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setNewTodoValue(e.target.value);

  const onClickSaveEditTodo = async (title: string) => {
    const selectedIndex = todoList.findIndex((ele) => ele.id === currentEditId);
    const selectedObj = todoList[selectedIndex];
    selectedObj;
    const response = await axios.put(`/todos/${currentEditId}`, {
      ...selectedObj,
      title,
    });

    if (response.status === 200) {
      dispatch(editTaskTitle({ ...selectedObj, title }));
      toast("Update task successfully", { type: "success" });
      setCurrentEditId(null);
    }
  };

  const handleSelectChange = (value: OptionValue) => {
    setSelectedFilter(filterOptions[value]);
  };

  const handleAddTodo: React.KeyboardEventHandler<HTMLInputElement> = async (
    event
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const eventTarget = event.target as HTMLInputElement;
      const title = eventTarget.value;
      if (title === "") {
        toast("Todo title is required.", {
          type: "error",
        });
      } else {
        const payload: Task = {
          id: uuidv4(),
          completed: false,
          title,
        };
        const response = await axios.post("/todos", payload);

        if (response.status === 201) {
          dispatch(addTask(payload));
          setNewTodoValue("");
          toast("Create task successfully.", { type: "success" });
        }
      }
    }
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
            const isEdit = currentEditId === id;
            const handleClickEdit = () => setCurrentEditId(id);
            const handleDeleteTodo = async () => {
              const response = await axios.delete(`/todos/${id}`);
              if (response.status === 200) {
                dispatch(deleteTask({ completed, id }));
                toast.success("Delete task successfully.", { type: "success" });
              }
            };

            const dropdownOptions: DropdownProps["options"] = [
              {
                label: "Edit",
                handleFn: handleClickEdit,
              },
              { label: "Delete", handleFn: handleDeleteTodo },
            ];
            return (
              <TodoItem
                completed={completed}
                className={isEdit ? "justify-between" : ""}
                dropdownOptions={dropdownOptions}
                id={id}
                isEdit={isEdit}
                key={id}
                onClickCancelEdit={onClickCancelEdit}
                onClickSaveEdit={onClickSaveEditTodo}
                title={title}
                toggleCompleted={toggleCompleted}
                value={title}
              />
            );
          })}
          <TodoNew
            placeholder="Add your todo..."
            value={newTodoValue}
            onChange={handleNewTodoValueChange}
            onKeyDown={handleAddTodo}
          />
        </div>
      </Container>
    </div>
  );
}

export default App;
