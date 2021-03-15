import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const Task = ({ task, onDelete }) => {
  return (
    <div>
      <h3>
        {task.text}
        <DeleteIcon
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p> {task.day}</p>
    </div>
  );
};

export default Task;
