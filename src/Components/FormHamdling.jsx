import React,{useState,useRef} from 'react';
function FormHandling(){
    const [name,setName]=useState("")
    const emailRef=useRef()
    function submitForm(e){
e.preventDefault();
console.log("Name",name)
console.log("email",emailRef.current.value)
    }

    return(
        <div>
            <form onSubmit={submitForm}> 
<input type="text" onChange={(e)=>setName(e.target.value)} placeholder='Name' className='dgdhdghd'/>
<input type="text" ref={emailRef} placeholder='Email' className='dgdhdghd'/>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export {FormHandling};