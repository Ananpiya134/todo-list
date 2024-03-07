import IconArrowDown from "@assets/images/icon-arrow-down.svg";

import { cnConcat } from "@/utils/cn";

import type { OptionValue, SelectProps } from "./types";
import "./style.css";
import { Typography } from "../typography";

const Select = ({
  optionList,
  selected,
  handleChange,

  open = false,
  className = "",
  ...props
}: SelectProps): JSX.Element => {
  return (
    <div {...props} className={cnConcat("dropdown-container", className)}>
      <div className="dropdown-header">
        <Typography variant="description">{selected.label}</Typography>
        <img src={IconArrowDown} alt="icon-arrow-doen" />
      </div>
      <div
        className="dropdown-list-container"
        style={{ display: open ? "block" : "none" }}
      >
        <ul className="dropdown-list">
          {optionList.map(({ label, value }) => {
            const isSelected = selected.value === value;
            return (
              <li
                className={isSelected ? "list-item-selected" : "list-item"}
                key={value}
                value={value}
                onClick={() => handleChange(value as OptionValue)}
              >
                <Typography
                  variant="option"
                  className={isSelected ? "text-white" : "text-black"}
                >
                  {label}
                </Typography>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Select;
