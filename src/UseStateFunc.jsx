import React, { useState } from 'react';

// function UseStateFunc() {
//     const [name,setName]= useState("John");
//    function updateName(){
//     setName("Suruchi");
//    }
//     return(
//         <div>
//            <p>{name}</p>
//            <button onClick={ ()=>setName("Suruchi")}>Change Name</button> 
            
//         </div>
//     )
// }

// import React,{useState} from "react";
// function ClickEvent() {
//     const [num, setNum]=useState(2);
//     // let fname="John";
    
//     function updateCount(){
//        setNum(num*2);
//     }
//     return(
//     <div>
// <h2>{num}</h2>
// {/* <button onClick={sayHello}>Click me</button> */}
// {/* <button onClick={()=>alert(fname)}>Click me</button> */}
// <button onClick={()=>setNum(num*2)}>Click me</button>
//     </div>
//     )
// }
// export default ClickEvent;

// 2.Counter example
function UseStateFunc() {
    const [count,setCount]= useState(0);
   function updateName(){
    setCount(count + 1);
   }
    return(
        <div>
           <p>{count}</p>
           <button onClick={ ()=>setCount(count + 1)}>Change Count</button> 
            
        </div>
    )
}

export default UseStateFunc;