import IconDots from "@assets/images/icon-dots.svg";

import { Checkbox } from "@components/checkbox";
import { Typography } from "@components/typography";

import { cnConcat } from "@/utils/cn";

import type { TodoItemProps } from "./types";
import "./style.css";

const TodoItem = ({
  title,
  className = "",
  ...props
}: TodoItemProps): JSX.Element => {
  return (
    <div
      {...props}
      className={cnConcat(
        "w-518 h-48 bg-white flex items-center gap-4 rounded-full p-todo",
        className
      )}
    >
      <Checkbox />
      <span className="w-full flex justify-between items-center">
        <Typography variant="title">{title}</Typography>
        <div>
          <button className="option">
            <img src={IconDots} alt="dots-icons" />
          </button>
        </div>
      </span>
    </div>
  );
};

export default TodoItem;
