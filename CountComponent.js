// import React, { useState, useEffect } from 'react';

// function CountComponent() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount((prevCount) => prevCount + 1);
//     }, 1000);

    
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       <h1>Auto Counter</h1>
//       <p>Count: {count}</p>
//     </div>
//   );
// }

// export default CountComponent;

import React,{useEffect,useState} from "react";

function CountComponent(){
  const [count,setCount] = useState(0);

  useEffect(()=>{
    const interval= setInterval(()=>{
      setCount((prevCount)=> prevCount+1);
    },1000)

    return ()=> clearInterval(interval);
  },[]);

  return(
    <>
    <h1>Auto Counter</h1>
    <p>Count: {count}</p>
    </>
  )
};

export default CountComponent;
