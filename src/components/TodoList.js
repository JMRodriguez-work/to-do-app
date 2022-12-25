import React from "react";
import "./styledComponents/TodoList.css";

function TodoList(props) {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
}

export { TodoList };
