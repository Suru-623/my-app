import {useState,useEffect} from 'react';
import axios from 'axios'
function FetchApiAxios(){
    const[users,setUsers]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>setUsers(res.data))
        .catch(err=>console.log(err))
        
    },[])

    return(
        <>
       {users.map(user=><div key={user.id}>
       <p >{user.name}</p>
       <p >{user.phone}</p></div>)}
       </>
    )
}
export {FetchApiAxios};