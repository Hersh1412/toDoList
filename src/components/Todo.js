import React from "react";
import { Button, Alert, Container, Row, Card } from "react-bootstrap";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCoffee } from "@fortawesome/free-solid-svg-icons";

// rsf
// rfc
//     <div className="card-body align-items-center"></div>

function Todo({ text, todo, todos, setTodos, status }) {
  // Events
  const deleteHandeler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completedHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <>
      <div className="d-flex container w-50 ">
        <div className="m-2 flex-fill">
          <Card className="align-items-start">
            <Card.Body>{todo.completed ? <del>{text}</del> : text}</Card.Body>
          </Card>
        </div>

        <div className="p-2 ">
          <Button onClick={completedHandler} className="btn btn-success m-2">
            <i className="bi bi-check fa-lg "></i>
          </Button>

          <Button onClick={deleteHandeler} className="btn btn-danger m-2">
            <i className="bi bi-trash-fill"></i>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Todo;
