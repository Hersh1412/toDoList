import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// custom comp

///    33 mins

import FormToDo from "./components/FormToDo";
import TodoList from "./components/TodoList";
//import Form from "./components/Form";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterdHandler();
    saveLocalTodos();
  }, [todos, status]);

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
      console.log("fgdvfdef");
    }

    console.log("out of if");
  };

  const filterdHandler = () => {
    switch (status) {
      case "Completed":
        setFiltered(todos.filter((item) => item.completed === true));
        break;
      case "Uncompleted":
        setFiltered(todos.filter((item) => item.completed === false));
        break;
      default:
        setFiltered(todos);
        break;
    }
  };

  return (
    <div className="App">
      <header className="header">
        <h1>TO DO List</h1>
      </header>

      <FormToDo
        setInputText={setInputText}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        status={status}
        filtered={filtered}
      />
    </div>
  );
}

export default App;
