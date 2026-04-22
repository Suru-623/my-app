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
export {SwitchButton}