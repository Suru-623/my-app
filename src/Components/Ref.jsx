import React, { Component, createRef } from 'react'

 class Ref extends Component {
  constructor(){
    super()
    this.myRef=createRef()
  }
  modifyInput(){
    console.log("input is",myRef.current.value)
  }
  render() {
    return (
<>
      <div>Ref in Class Component</div>
        <input type='text' ref={this.myRef}/>
    <button onClick={()=>this.modifyInput()}>
Click here
    </button>
      </>
    )
  }
}

export default Ref