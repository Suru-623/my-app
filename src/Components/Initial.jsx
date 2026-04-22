// import React from "react"; 
// function Initial(){
//     return(
//         <div>
//             function greetings(){
//                 alert("hello");
//             }
//             return(
//                 </h1>)
//         </div>
//     )
// }

// import React, { useState } from "react";

// function Initial() {
//   const [name, setName] = useState("");

//   const showGreeting = () => {
//     alert(`Hello ${name}`);
//   };

//   return (
//     <div>
//       <h2>Enter Your Name</h2>

//       <input
//         type="text"
//         placeholder="Enter name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <br /><br />

//       <button onClick={showGreeting}>Greetings</button>
//     </div>
//   );
// }

// export default Initial;
import React,{useState} from "react";

function Initial(){
  const [name,setName]=useState("")
  const [value,setValue]=useState("")
const [hide,setHide]=useState(false)
  function greet(){
    alert(`Hello ${name}`)
  }
 function changeName(){
   setValue(value)
   setHide(true)
   alert(value)
  }
  return(
    <div>
      <h2>{name}</h2>
      {!hide ?  "":<h2 class="changeButton">{value}</h2>}
      <input type="text" placeholder="Enter name"  onChange={(e)=>setName(e.target.value)} />
      <input type="text" placeholder="Enter name"  onChange={(e)=>setValue(e.target.value)} />
      
      <button onClick={greet}>Change greet dynamically</button>
      <button onClick={changeName}>Change name dynamically</button>
    </div>
  )
}
export default Initial;