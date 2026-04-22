import React from 'react';

 function JSX() {
   return (
    <div>
      <h1>JSX component(10+10){10+20%2}</h1>
    </div>

//react without JSX
//return React.createElement('div',null,React.createElement('h1',null,'JSX component(10+10)'+(10+20%2)));
  );
 }

 export default JSX;


