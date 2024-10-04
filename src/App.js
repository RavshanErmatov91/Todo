import { useState } from "react";
import "./App.css";
import Input from "./components/input";
import ListItems from "./components/ListItems";

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setToDoList([...toDoList, newTask]);
  };

  function deleteTask(deleteTaskName) {
    setToDoList(toDoList.filter((el) => el.taskName !== deleteTaskName));
    console.log(true);
  }
  function toggleCheck(taskName) {
    setToDoList((prevToDoList) =>
      prevToDoList.map((task) =>
        task.taskName === taskName ? { ...task, checked: !task.checked } : task
      )
    );
  }

  return (
    <div className="container">
      <h1>Todo List</h1>
      <Input addTask={addTask} />
      <div className="toDoList">
        <span>Todos</span>
        <ul className="list-items">
          {toDoList.map((el, id) => (
            <ListItems
              toggleCheck={toggleCheck}
              deleteTask={deleteTask}
              task={el}
              key={id}
            />
          ))}

          {toDoList.length === 0 ? (
            <p className="notify">You are done</p>
          ) : null}
        </ul>
      </div>
    </div>
  );
}

export default App;
