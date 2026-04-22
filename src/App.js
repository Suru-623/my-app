import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import FirstFile from './FirstFile';
import ClassComponent from './ClassComponent';
import JSX from './JSX';
import StateFunctionalComp from './StateFunctionalComp';
import ClickEvent from './ClickEvent';
import Counter from './UseStateFunc';
import UseStateFunc from './UseStateFunc';
import PropsFunc from './PropsFunc';
import Initial from './Components/Initial';
import { InputReplication } from './Components/InputReplication';
import { FormHandling } from './Components/FormHamdling';
import { CounterValue } from './Components/Counter';
import { SwitchButton } from './Components/SwitchButton';
import { FetchApi } from './Components/FetchApi';
import { FetchApiAxios } from './Components/FetchApiAxios';
import ConstructorMethod from './Components/ConstructorMethod'
function App() {
  const [name,setName]=useState("Sara");
function changeName(){
  setName("Sarvesh");
}

  return (
    <div className="App">
      {/* <Initial /> */}
      {/* <FormHandling/> */}
      {/* <CounterValue/> */}
{/* <InputReplication/> */}
      {/* <FirstFile /> */}
      {/* <ClassComponent /> */}
       {/* <JSX />  */}
      {/* <ClickEvent />  */}
      {/* <Counter /> */}
      {/* <StateFunctionalComp /> */}
      {/* <UseStateFunc /> */}
      {/* <PropsFunc name={"Suruchi"} email={"suruchi@gmail.com"} info={{salary: 50000,dob:"12-12-2000"}}/> */}
      {/* <PropsFunc name={name} />
      <button onClick={()=>{setName("Sarvesh")}}>Click</button> */}
      {/* <PropsFunc name={"Sarvesh"} email={"sru@gmail.com"} info={{salary: 20000,dob:"12-12-2000"}}/> */}
{/* <SwitchButton/> */}
{/* <FetchApi/> */}
{/* <FetchApiAxios /> */}
<ConstructorMethod/>


      {/* revision practice */}
    </div>
  );
}

export default App;
