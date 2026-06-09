import React, { useState } from 'react';

function ToDoList() {

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {

    const newTodo = {
      text: task,
      completed: false
    };

    setTodos([...todos, newTodo]);

    setTask("");
  };

  const deleteTodo = (indexToDelete) => {

    const updatedTodos = todos.filter(
      (_, index) => index !== indexToDelete
    );

    setTodos(updatedTodos);
  };

  const toggleComplete = (index) => {

    const updatedTodos = [...todos];

    updatedTodos[index].completed =
      !updatedTodos[index].completed;

    setTodos(updatedTodos);
  };

  return (
    <>
      <div>ToDoList</div>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTodo}>
        Add
      </button>

      <ol>
        {todos.map((todo, index) => (

          <li key={index}>

            <span
              style={{
                textDecoration: todo.completed
                  ? "line-through"
                  : "none"
              }}
            >
              {todo.text}
            </span>

            <button
              onClick={() => toggleComplete(index)}
            >
              Complete
            </button>

            <button
              onClick={() => deleteTodo(index)}
            >
              Delete
            </button>

          </li>
        ))}
      </ol>
    </>
  );
}

export default ToDoList ;