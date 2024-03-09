import { useState } from "react";

import { Checkbox } from "@components/checkbox";
import { Dropdown } from "@components/dropdown";
import { Input } from "@components/input";
import { Button } from "@components/button";
import { Typography } from "@components/typography";

import { cnConcat } from "@/utils/cn";

import type { ChangeEventHandler } from "react";
import type { TodoItemProps } from "./types";
import "./style.css";

const TodoItem = ({
  dropdownOptions,
  id,
  completed,
  title,
  toggleCompleted,
  onClickCancelEdit,
  onClickSaveEdit,

  className = "",
  isEdit = false,
  ...props
}: TodoItemProps): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>(title);

  const handleChangeInputValue: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => setInputValue(event.target.value);
  return (
    <div
      {...props}
      className={cnConcat(
        "w-full  bg-white flex items-center gap-16 rounded-full p-todo",
        className
      )}
    >
      {isEdit ? (
        <>
          <Input value={inputValue} onChange={handleChangeInputValue} />
          <div className="flex items-center gap-4">
            <Button onClick={() => onClickSaveEdit(inputValue)} variant="save">
              Save
            </Button>
            <Button onClick={onClickCancelEdit} variant="cancel">
              Cancel
            </Button>
          </div>
        </>
      ) : (
        <>
          <Checkbox
            checked={completed}
            value={id}
            onChange={(event) => toggleCompleted(event.target.value)}
          />
          <span className="w-full flex justify-between items-center">
            <Typography variant={completed ? "title-linethrough" : "title"}>
              {title}
            </Typography>
            <div>
              <Dropdown options={dropdownOptions} />
            </div>
          </span>
        </>
      )}
    </div>
  );
};

export default TodoItem;
