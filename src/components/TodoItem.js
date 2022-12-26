import React from "react";
import "./styledComponents/TodoItem.css";

function TodoItem(props) {

 

  

  return (
    <>
      <li className="todo-item">
        <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}` } onClick={props.onComplete}>
          <i className="fa-solid fa-check"></i>
        </span>
        <p className={`todo-item-p ${props.completed && 'todo-item-p--complete'}`}>{props.text}</p>
        <span className="Icon Icon-delete" onClick={props.onDelete}>
          <i className="fa-solid fa-trash" ></i>
        </span>
      </li>
    </>
  );
}

export { TodoItem };
