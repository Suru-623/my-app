import React,{useRef} from 'react'

const UseRefHook = () => {
    let myRef=useRef()
    function modifyInput(){
        // /console.log("input is",myRef.current.value)
myRef.current.value="suruchi"
myRef.current.style.backgroundColor="yellow"
myRef.current.style.color="black"
myRef.current.focus();//focus is a function not a property so will use like this
//for hiding any elelment 
//myRef.current.style.display="none"
    }
    console.log("Component Rendered")
  return (
  <>
    <div>UseRefHook</div>
    <input type='text' ref={myRef}/>
    <button onClick={modifyInput}>
Click here
    </button>
    </>
  )
}

export default UseRefHook