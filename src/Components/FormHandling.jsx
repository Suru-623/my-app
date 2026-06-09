// import React,{useState,useRef} from 'react';
// function FormHandling(){
//     const [name,setName]=useState("")
//     const emailRef=useRef()
//     function submitForm(e){
// e.preventDefault();
// console.log("Name",name)
// console.log("email",emailRef.current.value)
//     }

//     return(
//         <div>
//             <form onSubmit={submitForm}> 
// <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='Name' className='dgdhdghd'/>
// <input type="text" ref={emailRef} placeholder='Email' className='dgdhdghd'/>
//             <button type="submit">Submit</button>
//             </form>
//         </div>
//     )
// }

// export {FormHandling};

// import React,{useState,useRef} from "react";

// function FormHandling() {
//     const [name,setName]=useState("")
//     const emailRef=useRef()
//     function submitHandler(e){
//       e.preventDefault()
//       console.log(name)
//       console.log("Email:",emailRef.current.value)
//     }
//   return (
//     <>
//     <form onSubmit={submitHandler}>
//     <div>FormHandling</div>
//     <input className="user-name" type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} />
//     <input className="user-email" ref={emailRef} placeholder="Enter email" />
//     <button type="submit">Submit</button>
//     </form>
//     </>
//   )
// }

// export {FormHandling}
import React,{useState,useRef} from 'react'

function FormHandling() {
  const[name,setName]=useState("")
  const emailRef=useRef() 
function formHandler(e){
e.prevntDefault()
 console.log(name)
  console.log("Email",emailRef.current.value)
}
  return (
  <>  
    <div>FormHandling</div>
  <form onsubmit={formHandler}>
<input type="text" placeholder='Enter name' onChange={(e)=>setName(e.target.value)}/>
<input type="text" placeholder='Enter email' ref={emailRef}/>
  </form>
  </>
  )
}

export {FormHandling}