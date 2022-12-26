import React from "react";
import "./styledComponents/CreateTodoButton.css";

function CreateTodoButton() {

  const buttonAlert = (msg) => {
    alert(msg)
  }

  return (
    <>
      <button className="create-todo-button" onClick={() => buttonAlert('testeando')} >+</button>
    </>
  );
}

export { CreateTodoButton };
