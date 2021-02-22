import React from "react";
import { v4 as uuidv4 } from "uuid";

//import { Button } from "react-bootstrap";

function FormToDo({ setInputText, inputText, todos, setTodos, setStatus }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: uuidv4() }]);

    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div className="container myContainer ">
      <form className="d-flex p-2 todo-form">
        <div className="input-group input-group-lg">
          <input
            value={inputText}
            type="text"
            className="form-control w-25 m-3"
            placeholder="Enter Task"
            onChange={inputTextHandler}
          />
        </div>
        <button
          type="submit"
          className="btn btn-secondary btn-lg m-3"
          onClick={handelSubmit}
        >
          Submit
        </button>

        <select
          onChange={statusHandler}
          className="form-control select-form m-2 w-25"
        >
          <option>All</option>
          <option>Completed</option>
          <option>Uncompleted</option>
        </select>
      </form>
    </div>
  );
}

export default FormToDo;
