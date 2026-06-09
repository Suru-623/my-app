// import { useContext } from "react";
// import { UserContext } from "./ThemeContext";

// function GrandChild() {
//   const name = useContext(UserContext);

//   return <h1>{name}</h1>;
// }

// export default GrandChild;
import React from 'react'

function ToDoList() {
    const [task,setTask]=useState("")
    const [todos,setTodos]=useState([])

function addTodo(){
   const newTodo={
   text:task,
   completed:false
   } 
   setTodos([...todos,newTodo]);
   setTask("")
}
const deleteTodo=(deleteIndex)=>{
const updatedTodo=todos.filter(
   (_, index)=> index!==deleteIndex
);
 setTodos(updatedTodos);
}
  const toggleComplete = (index) => {

    const updatedTodos = [...todos];

    updatedTodos[index].completed =
      !updatedTodos[index].completed;

    setTodos(updatedTodos);
  };
}
  return (
    <div>ToDoList</div>
  )
}

export default ToDoList