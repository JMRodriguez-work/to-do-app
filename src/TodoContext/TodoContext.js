import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props){

    const {
        item: todos,
        saveItem: setTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue] = React.useState("");
      const [openModal, setOpenModal] = React.useState(false);
    
      const completedTodos = todos.filter((todo) => todo.completed === true).length;
      const totalTodos = todos.length;
    
      
      /*Logic for add a task */

      const addTodo = (text) => {
        const newTodos = [...todos];
        console.log('New Todos Test: ' + newTodos);
        newTodos.push({
          text: text,
          completed: false
        });
        setTodos(newTodos);
      }

      /*Logic for search input */
      let searchedTodos = [];
    
      if (!searchValue.length >= 1) {
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter((todo) => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });
      }
    
      /*Logic for complete a task */
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        setTodos(newTodos);
      };
    
      /*Logic for delete a task */
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        setTodos(newTodos);
      };

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            addTodo,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }