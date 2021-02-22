import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos, filtered }) {
  return (
    <div>
      {filtered.map((todo) => (
        <Todo
          text={todo.text}
          key={todo.id}
          todos={todos}
          todo={todo}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}

export default TodoList;
