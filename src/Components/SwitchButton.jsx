import React,{useState} from 'react';
function SwitchButton(){
    const [result, setResult]=useState(false)
function toggleText(){
    setResult(!result)
}
    return(
        <>
        {result && <h2>Text is visible</h2>}
        <button onClick={toggleText}>Toggle</button>
        </>
    )
}
export {SwitchButton};

// Show hide using 2 different button
// import {useState} from 'react';
// function SwitchButton(){
//     const[value,setValue]=useState(false)
//     return(
        
// <>
// {value && <p>Text</p>}
//  <button onClick={()=>setValue(true)}>Show</button>
//  <button onClick={()=>setValue(false)}>Hide</button>

// </>
//     )
// }
// export {SwitchButton};

// import {useState} from 'react';

// function SwitchButton(){
//     const[toggle,setToggle]=useState(false)

//     return(
//         <>
//         {toggle && <p>toogled text</p>}
//         <button onClick={()=>setToggle(!toggle)}>Toggle</button>
//         </>
//     )
// }
// export {SwitchButton}