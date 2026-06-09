// import React,{useState} from 'react';
// function CounterValue(){
//     const[num, setNum]=useState(0)
//     function handleIncrement(){
//         if(num>=10){
// return num;
//         }else{
//         setNum(num+1)}
//     }
//     function handleDecrement(){
//       if(num=-10){
//       return num;
//         }else{
//         setNum(num-1)}
//     }

       
//     return(
//         <div>
//             <h2>{num}</h2>
//             <button onClick={handleIncrement}>Increment</button>
//             <button onClick={handleDecrement}>Decrement</button>
//         </div>
//     )
// }

// export {CounterValue};

// 2. Counter with Edge Cases
// Create a counter with:

// Increment
// Decrement
// Reset

// Twist:Prevent going below 0,Add “+5” button
import React,{useState} from 'react';
function CounterValue(){
    const[count, setCount]=useState(0)
    const increment= ()=>setCount(prev=>prev>10?prev:prev+1)
     const decrement= ()=>setCount(prev=>prev<=0? 0:prev-1)
      const fiveInc = ()=>setCount(prev=>prev+5)
       const reset= ()=>setCount(0)
     return(
        <div>
            <h2>{count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={fiveInc}>fiveInc</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export {CounterValue};

