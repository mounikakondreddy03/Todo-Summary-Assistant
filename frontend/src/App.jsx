import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import SummaryButton from "./components/SummaryButton";

const App = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Todo Summary Assistant </h1>
      <TodoForm />
      <TodoList />
      <SummaryButton />
    </div>
  );
}

export default App;