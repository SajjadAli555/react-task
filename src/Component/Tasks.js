import React from "react";
import Task from "./Task";
const Tasks = ({ tasks, onDelete }) => {
  console.log(tasks)
  return (
    <>
      {tasks.map((task, index) => {
        return <Task key={index} task={task} onDelete={onDelete} />;
      })}
    </>
  );
};

export default Tasks;
