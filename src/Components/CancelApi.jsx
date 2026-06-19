import React,{useState,useEffect} from 'react'

function FetchApi() {
  const [users,setUsers]=useState([])
  useEffect(()=>{
    console.log("Component Mounted");
  const controller= new AbortController();
  const fetchUser=async()=>{
    try{
const response= await fetch("https://jsonplaceholder.typicode.com/users",{
  signal:controller.signal,
})
await new Promise((resolve)=> setTimeout(()=>resolve,3000))
const data= await response.json()
console.log("Fetched data:", data);
setUsers(data)
    }
    catch(error){
if(error.name==="AbortError"){
console.log("Request cancelled due to component mounted")
}
else{
  console.log(error)
}
    }
  }
  fetchUser()
  return()=>{
    console.log("Component unmounted")
    controller.abort();
  }
  },[])

  return (
  <>
    <div>CancelApi</div>
  {
    users.map((user)=>
    <div key={user.id}>
<p>{user.name}</p>
    </div>)
  }
  </>
  )
}
function CancelApi(){
  const [show,setShow]=useState(true)
  return(
    <>
    <button onClick={()=>setShow(!show)}>{show?"Unmount Component":"Mount Component"}</button>
    {show && <FetchApi/>}
    </>
  )
}

export {CancelApi}