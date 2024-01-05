import { Fragment, useState } from "react";
import Header from "./components/task/Header";
import TaskList from "./components/task/TaskList";

function App() {
  
  const[isComplete, setIsComplete]=useState(false)
  return (
    <Fragment>
      {/* Header Section */}
      <Header setIsComplete={setIsComplete} />

      {/* TaskList Section */}
      <TaskList isComplete={isComplete} />
    </Fragment>
  );
}

export default App;
