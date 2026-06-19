import React, { useState ,useEffect} from 'react'

function SearchWithDebouncing() {
  const[search,setSearch]=useState("")
  const[debouncedSearch,setDebouncedSearch]=useState("")
  const[users,setUsers]=useState([])

  useEffect(()=>{
    const timer= setTimeout(()=>setDebouncedSearch(search),4000)
return()=>clearTimeout(timer)
  },[search])
  useEffect(()=>{
    if(!debouncedSearch.trim()){
setUsers([])
return
    }

    const fetchUsers= async()=>{
      try{
        const response= await fetch("https://jsonplaceholder.typicode.com/users")
        const data =await response.json()
        const filteredUsers= data.filter((user)=>user.name.toLowerCase().includes(debouncedSearch.toLowerCase()))
        setUsers(filteredUsers)

      }
      catch(error){
        console.log(error)
      }
    }
    fetchUsers()
  },[debouncedSearch])
  return (
    <>
    <div>SearchWithDebouncing</div>
    <input placeholder='search' value={search} onChange={(e)=>setSearch(e.target.value)}/>
   
    <ul>
    {
      users.map((user)=>
<li key={user.id}>
{user.name}
<br></br>
{user.username}
</li>
      
      )
    }</ul> </>
  )
}

export {SearchWithDebouncing}