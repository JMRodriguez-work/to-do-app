import React from "react";
import "./styledComponents/TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    
      <input className="todo-search" value={searchValue} placeholder="Search..." onChange={onSearchValueChange} />
    
  );
}

export { TodoSearch };
