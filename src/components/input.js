import React, { useState } from "react";

const Input = ({ addTask }) => {
  const [val, setVal] = useState("");

  console.log(val);
  function handleTask(e) {
    e.preventDefault();
    if (val.length > 0) {
      addTask(val);
    }
    setVal("");
  }
  return (
    <div>
      <form onSubmit={handleTask} className="form">
        <input
          onChange={(e) => setVal(e.target.value)}
          placeholder="Add task..."
          type="text"
          value={val}
        />
        <button>+</button>
      </form>
    </div>
  );
};

export default Input;
