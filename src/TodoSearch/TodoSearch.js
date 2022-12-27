import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoSearch.css";

function TodoSearch() {

  const {
    searchValue, 
    setSearchValue
  } = React.useContext(TodoContext)
  
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    
      <input className="todo-search" autoFocus value={searchValue} placeholder="Search a task..." onChange={onSearchValueChange} />
    
  );
}

export { TodoSearch };
