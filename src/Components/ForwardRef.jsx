// import React,{useRef} from 'react'
// import ChildForwardRef from "./ChildForwardRef"

// const ForwardRef = () => {
//     let myRef=useRef();
//     function modifyInput(){
//        myRef.current.value="suruchi"
//     }
//   return (
// <>
//     <div>ForwardRef</div>
//     <ChildForwardRef ref={myRef}/>
//     <button onClick={()=>modifyInput()}>Click here</button>
//     </>
//   )
// }

// export default ForwardRef
import React,{useRef} from 'react'
import ChildForwardRef from './ChildForwardRef'

const ForwardRef = () => {
  let myRef=useRef()
  function modifyInput(){
    console.log(myRef.current.value)
    myRef.current.value="suruchi"
    console.log(myRef.current.value)
  }
  return (
    <>
    <div>ForwardRef</div>
    <button onClick={()=>modifyInput()}> Click</button>
    <ChildForwardRef ref={myRef}/>
    </>
  )
}

export default ForwardRef
