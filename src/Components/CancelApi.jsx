import { useState,useEffect } from "react";
// import { FetchApi } from "./FetchApi";

function FetchApi(){
  const [users,setUsers]=useState([])
  useEffect(()=>{
    console.log("Component Mounted");
    const controller = new AbortController();
    const fetchUsers=  async()=>{
try{
 const response = await fetch("https://jsonplaceholder.typicode.com/users",{
  signal:controller.signal,
 })
 await new Promise((resolve)=>setTimeout(resolve,5000))
 
        console.log("API Response Received");
 const data= await response.json()
setUsers(data)

}
catch(error){
if(error.name==="AbortError"){
  console.log("Component mounted because Api request cancelled")
}
else{
  console.log(error)
}
} }
fetchUsers();
//Cleanup Function
return()=>{
   console.log("Component Unmounted");
  controller.abort()
}
  },[])
  return(
    <>
    <h1>User List</h1>
{users.map(user=>

  <div key={user.id}>
    <p>{user.name}</p>
  </div>
)}
    </>
  )
}
function CancelApi(){
  const [show,setShow]=useState(true)
  return(
    <>
    <button onClick={()=>setShow(!show)}>
      {show? "Unmount Component":"Mount Component"}
    </button>
    <hr />
    {show&& <FetchApi/>}
    </>
  )
}
export {CancelApi}
