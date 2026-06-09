import React,{useState,useEffect} from 'react'

function SearchWithDebouncing() {
    const [search,setSearch]=useState("")
    const [debouncedSearch,setDebouncedSearch]=useState("")
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setDebouncedSearch(search)
    },3000)
        return()=>{
clearTimeout(timer)
        }
    },[search])
    useEffect(()=>{
        if(debouncedSearch){
            console.log("API Call:", debouncedSearch);
            fetch(`https://jsonplaceholder.typicode.com/users/search?q=${debouncedSearch}`)
        .then((res) => res.json())
        .then((data) => console.log(data));
        }
    }, [debouncedSearch])
  return (<>
    <div>SearchWithDebouncing</div>
     <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  )
}

export {SearchWithDebouncing};