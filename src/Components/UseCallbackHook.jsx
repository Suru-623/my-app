import React, { useState,useCallback } from 'react'
import  EgUsecallback  from './EgUsecallback'

const UseCallbackHook = () => {
    const [count,setCount]=useState(0)
    const [item,setItem]=useState(1)

    const newData=useCallback(()=>{
        console.log("I'm a new component",item)
    },[item])
  return (
   <>
   <div>UseCallbackHook Eg.</div>
   <h3>Count:{count}</h3>
   <button onClick={()=>setCount(count+1)}>Count</button>
   <button onClick={()=>setItem(item*2)}>Item</button>
   <EgUsecallback item={item} data={newData}/>
   </>
  )
}

export  {UseCallbackHook}