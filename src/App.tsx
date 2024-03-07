import axios from "@services/axios";
import { useState, useEffect } from "react";

// import { Checkbox } from "@/components/checkbox";
// import { TodoItem } from "./components/todo-item";
import { Container } from "@/components/container";
import { ProgressBar } from "@/components/progress-bar";
import { Select } from "@components/select";
import { Typography } from "@/components/typography";

import { filterOptions } from "@/configs/constants";

import type { Option } from "@/types";
import type { OptionValue } from "@components/select";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>();
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<Option>(
    filterOptions.ALL
  );

  const onClickDropdown = () => setOpenDropdown((prev) => !prev);

  const handleSelectChange = (value: OptionValue) => {
    setSelectedFilter(filterOptions[value]);
  };

  const fetch = async () => {
    const response = await axios.get("/todos");

    setData(response);
  };
  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    console.log(openDropdown);
  }, [openDropdown]);

  useEffect(() => {
    setOpenDropdown(false);
  }, [selectedFilter]);

  return (
    <div className="bg-screen w-full h-full">
      <Container>
        <ProgressBar completed={3} total={10} />
        <div className="w-full flex justify-between items-center">
          <Typography variant="heading-2-black">Tasks</Typography>
          <Select
            open={openDropdown}
            onClick={onClickDropdown}
            optionList={Object.values(filterOptions)}
            selected={selectedFilter}
            handleChange={handleSelectChange}
          />
        </div>
      </Container>
    </div>
  );
}

export default App;
