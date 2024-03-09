import { cnConcat } from "@/utils/cn";

import type { TodoNewProps } from "./types";
import { Input } from "@/components/input";

const TodoNew = ({
  onKeyDown,
  placeholder,
  onChange,
  value,

  className = "",
  ...props
}: TodoNewProps): JSX.Element => {
  return (
    <div
      {...props}
      className={cnConcat(
        "w-full rounded-full bg-white h-48 flex items-center p-todo",
        className
      )}
    >
      <Input
        id="input-todo-new"
        name="title"
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TodoNew;
