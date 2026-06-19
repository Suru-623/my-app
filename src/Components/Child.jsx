import React from "react";

const Child = React.memo(({ handleClick }) => {
  console.log("Child Rendered");

  return (
    <button onClick={handleClick}>
      Child Button
    </button>
  );
});

export {Child};