import axios from "@services/axios";
import { useState, useEffect } from "react";

// import { Checkbox } from "@/components/checkbox";
// import { TodoItem } from "./components/todo-item";
import { Typography } from "@/components/typography";
import { Container } from "@/components/container";
import { ProgressBar } from "@/components/progress-bar";

// import { getAllTask } from "./services/task";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>();

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

  return (
    <div className="bg-screen w-full h-full">
      <Container>
        <ProgressBar completed={3} total={10} />
        <div className="flex justify-between items-center">
          <Typography variant="heading-2-black">Tasks</Typography>
        </div>
      </Container>
    </div>
  );
}

export default App;
