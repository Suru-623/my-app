//useEffect with props
import React,{useState,useEffect} from 'react';
function UseEffectProps(props){
 useEffect(()=>{
       console.log("Count",props.data)
    },[props.data])
return (
    <>
    <div>{props.data}</div></>
)

}

export {UseEffectProps};