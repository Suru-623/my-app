// import React,{useState,useEffect} from 'react'
// function CancelPrevApi() {
// const[users,setUsers]=useState([])
// useEffect(()=>{
//     const controller=new AbortController();
//     const fetchUsers=async()=>{
        
//        try {
//          const response= await fetch("https://jsonplaceholder.typicode.com/users",{signal:controller.signal});
//          const data= await response.json();
//          setUsers(data);
//        }
//        catch (error){
//         if(error.name === "AbortError"){
//             console.log("request cancelled");

//         }
//         else(
//           console.error(error)
//         )
//        }
//     }
//     fetchUsers()
//     return(()=>{
// controller.abort()
//     })
// },)

//   return (
    
//   <>
//    {users.map(user=>(
//     <div key={user.id}>
//     <p>{user.name}</p>
//     </div>
//    ))}
//   </>
//   )
// }

// export {CancelPrevApi}
// import React,{useState,useEffect} from 'react';

// function CancelPrevApi() {
// const [users, setUsers]=useState([])

//   useEffect(()=>{
// const controller= new AbortController();
//   const fetchUser= async()=>{
// try{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users",{signal:controller.signal})
// const data = await response.json();
// setUsers(data);
//   }

//   catch(error){
//     if(error.name === 'AbortError'){
//       console.log("Request cancelled",error)
//     }
//     else{
// console.log(error)
//     }
//   }
//   }
//   fetchUser()
//   return(()=>{
//     controller.abort();
//   })

// },[])
//   return (
//     <>
//      <div>CancelPrevApi</div>
//      {users.map(user=>
//       <div key={user.id}>
//         <p>{user.name}</p>
//         <p>{user.username}</p>
//       </div>
//      )}
//       </>
   
//   )
// }

// export {CancelPrevApi}

// import React, { useState, useEffect } from "react";

// function FetchApi() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const controller = new AbortController();

//     const fetchUsers = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/users",
//           { signal: controller.signal }
//         );
//         const data = await response.json();
//         setUsers(data);
//       } catch (error) {
//         if (error.name === "AbortError") {
//           console.log("Request cancelled");
//         } else {
//           console.error(error);
//         }
//       }
//     };

//     fetchUsers();

//     // Cleanup function → cancels previous request
//     return () => {
//       controller.abort();
//     };
//   }, []);

//   return (
//     <>
//       {users.map(user => (
//         <div key={user.id}>
//           <p>{user.name}</p>
//         </div>
//       ))}
//     </>
//   );
// }

// export  FetchApi;

// import React,{useState,useEffect} from 'react'

// function CancelPrevApi() {
//   const[users,setUsers]=useState("")
//   useEffect(()=>{
//     const controller=new AbortController();
//     const fetchUsers=async()=>{
//           try {
//       const response=await fetch("https://jsonplaceholder.typicode.com/users",{signal:controller.signal})
//       const data= await response.json();
//           }
//           catch(error){
//     if (error.name==="AbortError"){
//               console.log("Request Cancelled")
//     }
//     else{
//               console.log(error)
//     }
//           }
//     };
    
//   })
//   return (
//     <div>CancelPrevApi</div>

//   )
// }

// export {CancelPrevApi}

//This shows how API request is cancelled or when the component is unmounted.
import React, { useEffect, useState } from "react";

function FetchApi() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("Component Mounted");

    const controller = new AbortController();

    const fetchUsers = async () => {
      try {
        console.log("API Request Started...");

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            signal: controller.signal,
          }
        );

        // Artificial delay so you can see unmount clearly
        await new Promise((resolve) => setTimeout(resolve, 5000));

        const data = await response.json();

        console.log("API Response Received");

        setUsers(data);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Request Cancelled because component unmounted");
        } else {
          console.log(error);
        }
      }
    };

    fetchUsers();

    // Cleanup Function
    return () => {
      console.log("Component Unmounted");
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h2>User List</h2>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

function CancelPrevApi() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Unmount Component" : "Mount Component"}
      </button>

      <hr />

      {show && <FetchApi />}
    </div>
  );
}

export {CancelPrevApi};

// import React,{useState,useEffect} from 'react'

// function CancelPrevApi() {
//   const [users,setUsers]=useState([])
//   useEffect(()=>{
//     const controller= new AbortController();
//     const fetchUsers= async()=>{
//       try{
//         const response= await fetch("https://jsonplaceholder.typicode.com/users",{signal:controller.signal})
//         const data= await response.json()
//       }
//       catch(error){
//         if (error.name==="AbortController"){
//           console.log("Request Cancelled")
//         }
//         else{
//         console.log(error)
//         }
//       }
//     }
//   })

//   return (
//     <>
//     <div>CancelPrevApi</div>
//     {
//       users.map(user=>
//         <div key={user.id}>
//           <p>{user.name}</p>
//           <p>{user.contact}</p>
//         </div>
//       )
//     }
//     </>
    
//   )
// }

// export {CancelPrevApi}