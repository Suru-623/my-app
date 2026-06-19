import React from 'react';

const ChildToParent = (prop) => {
    // let user = "Farzeen"
    // let user = ["Farzeen", "f@gmaiul.com", 123]
    let user = {name: "mina", email: "fsc@gmail.com" , contact: 123}
  return (
    <>
     {/* <h2>Name: {prop.item} </h2>  */}
     {/* <h2>Name:  </h2>  */}
     <button onClick={() => prop.item(user)}>Click</button>
    </>
  );
}

export default ChildToParent;