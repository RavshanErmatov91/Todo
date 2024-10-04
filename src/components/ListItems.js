import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const ListItems = ({ task, deleteTask, toggleCheck }) => {
  return (
    <li className="items">
      <div className="items-text">
        <input
          onChange={() => toggleCheck(task.taskName)}
          type="checkbox"
          checked={task.checked}
        />
        <p className={task.checked ? "isChecked" : ""}>{task.taskName}</p>
      </div>
      <RiDeleteBin6Line
        onClick={() => deleteTask(task.taskName)}
        className="delete-icon"
      />
    </li>
  );
};

export default ListItems;
