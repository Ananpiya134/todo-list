import { useEffect } from "react";

import { Typography } from "@/components/typography";
import { Checkbox } from "@/components/checkbox";

import { getAllTask } from "./services/task";

function App() {
  useEffect(() => {
    getAllTask();
  }, []);

  return (
    <>
      <div className="bg-grey-900">
        <Typography variant="heading-1-white">Heading-1-white</Typography>
      </div>
      <Typography variant="heading-2-black">Heading-2-black</Typography>
      <Typography variant="title">Title</Typography>
      <Typography className="text-grey line-through" variant="description">
        Description
      </Typography>
      <div className="flex justify-center w-full">
        <Checkbox />
      </div>
    </>
  );
}

export default App;
