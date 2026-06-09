// import React from 'react'

// function UseMemo() {
//   return (
//     <div>UseMemo</div>
//   )
// }

// export default UseMemo


//without UseMemo 
// import React, { useState } from "react";

// function UseMemo() {

//   const [count, setCount] = useState(0);
//   const [item, setItem] = useState(0);

//   function multiplyByTwo(num) {

//     console.log("Calculation Happening");

//     return num * 3;
//   }

//   return (
//     <div>

//       <h1>{multiplyByTwo(count)}</h1>

//       <button onClick={() => setCount(count + 1)}>
//         Count
//       </button>

//       <button onClick={() => setItem(item + 1)}>
//         Item
//       </button>

//     </div>
//   );
// }

// export {UseMemo};


import React, { useMemo, useState } from "react";

function UseMemo() {

  const [count, setCount] = useState(0);
  const [item, setItem] = useState(0);

  const result = useMemo(() => {

    console.log("Calculation Happening");

    return count * 2;

  }, [count]);

  return (
    <div>

      <h1>{result}</h1>

      <button onClick={() => setCount(count + 1)}>
        Count
      </button>

      <button onClick={() => setItem(item + 1)}>
        Item
      </button>

    </div>
  );
}

export {UseMemo};