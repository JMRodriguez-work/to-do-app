import React from "react";
import "./styledComponents/TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
      <h2 className="TodoCounter-title"><b>Completed {completed}</b> of {total} tasks</h2>
  );
}

export { TodoCounter };
