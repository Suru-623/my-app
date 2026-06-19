import React,{useState,createContext} from 'react'
import FirstChild from "./FirstChild"

export const MyData=createContext()
const ContextApiWithHooks = () => {
  const [data,setData]=useState(1)
  const [salary,setSalary]=useState(1)
  const getSalary=(val)=>{
    console.log("value is ",val)
    setSalary(val)
  }
  return (
    <MyData.Provider value={{valueData:data,getSalary:getSalary}}>
    <>
    <div>ContextApiWithHooks</div>
    <button onClick={()=>setData(data+1)}></button>
    <h2>Updated salary:{salary}</h2>
    <FirstChild/>
    </>
    </MyData.Provider>
  )
}

export default ContextApiWithHooks