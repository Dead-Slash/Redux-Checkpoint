import React from "react";
import { useDispatch } from "react-redux";
import { Deletetask, Edittask } from "../redux/Action";

const Task = ({ task }) => {
  const { id, taskName, isDone } = task;

  const dispatch = useDispatch();

  return (
    <li>
      <span
        className={isDone === true ? "completed" : ""}
        onClick={() =>
          dispatch(Edittask(id, { id, taskName, isDone: !isDone }))
        }
      >
        {taskName}
      </span>
      <i
        className="fa-solid fa-trash-can"
        onClick={() => dispatch(Deletetask(id))}
      ></i>
    </li>
  );
};

export default Task;
