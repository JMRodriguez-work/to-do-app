import "./App.css";
import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { Header } from "./components/Header";

const todos = [
  {
    text: "Cortar cebolla",
    completed: false,
  },
  {
    text: "Pelar papa",
    completed: false,
  },
  {
    text: "A la sartén",
    completed: false,
  },
];

function App() {
  return (
    <>
      <Header />
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
