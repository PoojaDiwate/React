// import React, { useRef, useState } from 'react';

// function CounterButton() {
//   const countRef = useRef(0);
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     countRef.current += 1;
//     setCount(countRef.current);
//   };
 
//   return (
//     <div>
//       <button onClick={handleClick}>Click me</button>
//       <p>Button clicked {count} times</p>
//     </div>
//   );
// }

// export default CounterButton;

import React,{useState,useRef} from 'react';

function CounterButton()
{
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  const handleClick=()=>{
    countRef.current += 1;
    setCount(countRef.current);
  }

  return(
    <>
    <button onClick={handleClick}>Click me</button>
    <p>Button Cliked {count}</p>
    </>
  )
};

export default CounterButton;