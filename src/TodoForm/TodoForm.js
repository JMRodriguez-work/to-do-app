import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoForm.css"

function TodoForm() {

    const onClickEnter = (e) => {
        if(e.key === 'Enter'){
            addTodo(newTodoValue);
            setOpenModal(false);
        }
    }

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const {
        addTodo,
        setOpenModal

    } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="text-area">Add your task</label>
      <textarea autoFocus value={newTodoValue} id="text-area" placeholder="Your task here" onChange={onChange} onKeyDown={onClickEnter}/>
      <div className="todoForm-buttoncontainer">
        <button className="todoForm-button todoForm-button--cancel" type="button" onClick={onCancel} >Cancel</button>
        <button className="todoForm-button todoForm-button--add" type="submit" >Add</button>
      </div>
    </form>
  );
}

export { TodoForm };
