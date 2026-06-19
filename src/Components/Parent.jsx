import React, { useState } from "react";
import {Child} from "./Child";

function Parent() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(0);

  const handleClick = () => {
    console.log("Button Clicked");
  };

  return (
    <div>
      <Child handleClick={handleClick} />

      <button onClick={() => setCount(count + 1)}>
        Count
      </button>

      <button onClick={() => setItem(item + 1)}>
        Item
      </button>
    </div>
  );
}

export {Parent};