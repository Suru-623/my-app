// import React,{useState,useEffect} from 'react';
// function FetchApi(){
//     const[users,setUsers]=useState([])
//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then(response=>response.json())
//         .then(data=>setUsers(data))
//         .catch(err=>console.log(err))
//     },[])
//     return(
    
//         <>
//          <p>Fetch Data</p>
// {users.map(user => (
//   <React.Fragment key={user.id}>
//     <p>{user.name}</p>
//     <p>{user.username}</p>
//     <p>{user.address.city}</p>
//   </React.Fragment>
// ))}
//         </>
//     )
// }
// export {FetchApi};

// import React,{useState,useEffect} from 'react'

// function FetchApi() {
//   const[users,setUsers]=useState([])
//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response=>response.json())
//     .then(data=>setUsers(data))
//   },[])
//   return (
//      <>
// {users.map(user=>(
//       <div key={user.id}>
//     <div>FetchApi</div>
//      <p>{user.name}</p>
//     <p>{user.username}</p>
//    <p>{user.address.city}</p>
// </div>
// ))}
//  </>
//   )
// }

// export  {FetchApi}
// import React,{useState,useEffect} from 'react'

// function FetchApi() {
//   const[user,setUser]=useState([])
//   useEffect(()=>{ 
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response=>response.json())
// .then(data=>setUsers(data))
// },[])
//   return (
//    <>
//    {
//     users.map(user=>(
//       <div key={user.id}>
//       <p>{user.name}</p>
//       </div>
//     ))
//    }
//    </>

//   )
// }

// export {FetchApi}
import React,{useState,useEffect} from 'react'

function FetchApi() {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(data=>setUsers(data))
  },[])
  return (<>
    <div>FetchApi</div>
     {
    users.map(user=>(
      <div key={user.id}>
      <p>{user.name}</p>
      </div>
    ))
   }
</>
  )
}

export  {FetchApi}