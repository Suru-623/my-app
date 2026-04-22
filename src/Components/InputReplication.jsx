// These two inputs are independent. Make them stay in sync: editing one input should update the other input with the same text, and vice versa.
import React,{useState} from 'react';
function InputReplication(){
    const[value,setValue]=useState("")
    return(
        <div>
             <Input  label="First input" type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
      <Input  label="Second input" type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
        </div>
    )
}
function Input({type,label,value,onChange}){
return(
    <div>
            <h2>{label}</h2>
 <input type={type} value={value} onChange={onChange} className='dgdhdghd'/>
    </div>
)
}
export {InputReplication};