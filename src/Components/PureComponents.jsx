import React, { Component,PureComponent } from "react";

class Child extends PureComponent {
     constructor() {
    super();

    this.state = {
      child: 0
    };
  }
  render() {


    console.log("Child Rendered");

    return (<>
      <h1>Child Component</h1>
      <button onClick={()=>this.setState({child: this.state.child + 1})}>Inc Child</button>
    </>
    );
  }
}

class PureComponents extends PureComponent {

  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  render() {

    console.log("Parent Rendered");

    return (
      <div>
        <h1>{this.state.count}</h1>
        <Child />
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1
            })
          }
        >
          Increment
        </button>
      </div>
    );
  }
}

export {PureComponents};