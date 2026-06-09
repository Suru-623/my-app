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
import { FormHandling } from './Components/FormHandling';
import {CounterValue } from './Components/CounterValue';
import { SwitchButton } from './Components/SwitchButton';
import { FetchApi } from './Components/FetchApi';
import { FetchApiAxios } from './Components/FetchApiAxios';
import ConstructorMethod from './Components/ConstructorMethod';
import {UseEffectProps} from './Components/UseEffectProps';
import {CancelPrevApi} from './Components/CancelPrevApi';
import {UseEffectConditions} from './Components/UseEffectConditions';
import {PureComponents} from './Components/PureComponents';
import {UseMemo} from './Components/UseMemo';
import UseCallbackHook from './Components/UseCallbackHook';
import ToDoList from './Components/ToDoList';
import { LazyLoading } from './Components/LazyLoading';
import {Progressbar} from './Components/Progressbar';
import {SearchWithDebouncing} from './Components/SearchWithDebouncing';
import {InfiniteScrolling} from './Components/InfiniteScrolling';
import { CancelApi } from './Components/CancelApi';
import {MaterialUi} from './Components/MaterialUi';
import UserContext from "./Components/UserContext";

import { UserContext } from "./Components/ThemeContext";
import Parent from "./Components/Navbar";
function App() {
  const [name,setName]=useState("Sara");
function changeName(){
  setName("Sarvesh");
}
const [count,setCount]=useState(0);
  return (
    <div className="App">
      <ThemeContext/>
      {/* <CancelApi/> */}
      {/* <MaterialUi/> */}
      {/* <InfiniteScrolling /> */}
      {/* <SearchWithDebouncing/> */}
      {/* <Progressbar/> */}
      {/* <LazyLoading/> */}
      {/* <ToDoList/> */}
      {/* {UseCallbackHook} */}
    {/* <UseMemo/> */}
       {/* <PureComponents/> */}
      {/* <UseEffectConditions/> */}
        {/* <CancelPrevApi/>  */}
      {/* <Initial /> */}
    {/* <FormHandling/>   */}
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
      {/* <SwitchButton/>  */}
      {/* <FetchApi/>   */}
 {/* <FetchApiAxios />   */}
{/* <ConstructorMethod/> */}
{/* <UseEffectProps data={count} />
<button onClick={() => setCount(count + 1)}>Increase</button> */}
      {/* revision practice */}
    </div>
  );
}

export default App;
