// import React,{useState,useEffect} from 'react'

// function Progressbar() {
//     const [progress,setProgress]=useState(0);
//     useEffect(()=>{
//       const interval=setInterval(()=>{
//         setProgress((prev)=>{
// if(prev>=100){
//     clearInterval(interval);
//     return 100;
// }
// return prev+10;
//         })
//       }
//     ,1000)  
//      return () => clearInterval(interval);
//     },[])


//   return (
//   <>
//     <div>Progressbar</div>
//         <div style={{ width: "300px", border: "1px solid black" }}>

//       <div
//         style={{
//           width: `${progress}%`,
//           backgroundColor: "green",
//           height: "30px",
//           transition: "0.5s"
//         }}
//       >
//       </div>
//     <p>{progress}%</p>
//         </div>
//     </>
//   )
// }

// export {Progressbar}
// import React,{useState,useEffect} from 'react'
// const [progress,setProgress]=useState(0)
// useEffect(()=>{
    
// })
// function Progressbar() {
//   return (
//     <div>Progressbar</div>

//   )
// }

// export default Progressbar