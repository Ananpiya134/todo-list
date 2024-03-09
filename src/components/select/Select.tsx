import IconArrowDown from "@assets/images/icon-arrow-down.svg";

import { Typography } from "@components/typography";

import { cnConcat } from "@/utils/cn";

import type { OptionValue, SelectProps } from "./types";
import "./style.css";

const Select = ({
  optionList,
  selected,
  handleChange,

  open = false,
  className = "",
  ...props
}: SelectProps): JSX.Element => {
  return (
    <div {...props} className={cnConcat("select-container", className)}>
      <div className="select-header">
        <Typography variant="description">{selected.label}</Typography>
        <img src={IconArrowDown} alt="icon-arrow-doen" />
      </div>
      <div
        className="select-list-container"
        style={{ display: open ? "block" : "none" }}
      >
        <ul className="select-list">
          {optionList.map(({ label, value }) => {
            const isSelected = selected.value === value;
            return (
              <li
                className={
                  isSelected ? "select-list-item-selected" : "select-list-item"
                }
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
