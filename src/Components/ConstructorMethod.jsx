import React,{Component} from "react";
class ConstructorMethod extends Component {
    constructor(props){
    super(props)
    this.state={
count:0
    }
}
    render() {
        return(
            <div>
                <h1>This is a Constructor Life Cycle Method</h1>
                <p>{this.state.count}</p>
            </div>
        )
    }
}
export default ConstructorMethod;
