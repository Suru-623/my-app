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
import React,{useRef, useState} from 'react'

function FormHandling() {
  const [name,setName] = useState("")
  const emailRef = useRef()
  function handleForm(e){
e.preventDefault();
console.log("form submitted successfully")
console.log(name)
console.log(emailRef.current.value)
  }
  return (
<>
    <div>FormHandling</div>
    <form onSubmit={handleForm}>
    <div><label>Name</label><input onChange={(e)=>setName(e.target.value)} placeholder='Name' type="text"></input></div>
    <div><label>Email</label><input ref={emailRef} placeholder='Email'></input></div>
    <button type="submit">Submit</button>
    </form>
    </>
  )
}

export {FormHandling}