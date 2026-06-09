// import React from 'react'

// function UseEffectConditions() {
//   return (
//     <div>UseEffectConditions</div>
//   )
// }

// export {UseEffectConditions}
import React, { useEffect, useState } from "react";

function UseEffectConditions() {

  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);

  useEffect(() => {
    console.log("useEffect called");
  }, [count]);

  return (
    <div>

      <h1>Count : {count}</h1>
      <h1>Data : {data}</h1>

      <button onClick={() => setCount(count + 1)}>
        Update Count
      </button>

      <button onClick={() => setData(data + 1)}>
        Update Data
      </button>

    </div>
  );
}

export {UseEffectConditions};