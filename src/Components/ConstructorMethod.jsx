// import React,{Component} from "react";
// class ConstructorMethod extends Component {
//     constructor(props){
//     super(props)
//     this.state={
// count:0
//     }
// }
//     render() {
//         return(
//             <div>
//                 <h1>This is a Constructor Life Cycle Method</h1>
//                 <p>{this.state.count}</p>
//             </div>
//         )
//     }
// }
// export default ConstructorMethod;
import React,{Component} from "react";
class ConstructorMethod extends Component{
    constructor(props){
        super(props)
this.state={
    count:0
}
    }
render(){
    return(
        <>
         <h1>This is a Constructor Life Cycle Method</h1>
         <p>{this.state.count}</p>
         <button onClick={()=>this.setState({count:this.state.count+1})}>Inc</button>
         </>
    )
}
}
 export default ConstructorMethod;