import React,{useContext} from 'react'
import   SecondChild from "./SecondChild"
const FirstChild = () => {
  return (
  <>
    <div>FirstChild</div>
      < SecondChild/>
  </>
  )
}

export default FirstChild