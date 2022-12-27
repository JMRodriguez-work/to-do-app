import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoCounter() {

  const {totalTodos, completedTodos} = React.useContext(TodoContext);

  return (
    
      <h2 className="TodoCounter-title"><b>Completed {completedTodos}</b> of {totalTodos} tasks</h2>
  );
}

export { TodoCounter };
