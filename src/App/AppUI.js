import React from "react";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { Header } from "../Header/Header";
import { TodoContext } from "../TodoContext/TodoContext";
import { Modal } from "../Modal/Modal";
import { TodoForm } from "../TodoForm/TodoForm";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    totalTodos,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <Header />
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Error!</p>}
        {/* {loading && <p className="loading">Loading...</p>} */}
        {loading && <div className="custom-loader"></div>}
        {!loading && !searchedTodos.length && totalTodos >= 1 && (
          <p className="no-match">No TO DO found</p>
        )}

        {!loading && !totalTodos && (
          <p className="create-first-todo">¡Create your first TO DO!</p>
        )}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };
