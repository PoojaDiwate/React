// import React, { useState } from "react";

// function SignIn(){

//     const [message,setMessage]=useState('');

//     const SignIn=()=>{
//         setMessage("Hello, Welcome in Home Page")
//     };

//     const SignOut=()=>{
//         setMessage("Please, SignIn first")
//     };
//     return(
//         <>
//             <button onClick={SignIn}>SignIn</button>
//             <button onClick={SignOut}>SignOut</button>
//             <p>{message}</p>
//         </>
//     )
// }

// export default SignIn;

// import React, { useState } from "react";
// function SignIn(){

//     const[isSignin,setSignin]=useState(false)
//     const[message,setMessage]=useState('')

//     const check=()=>{
//         setSignin(!isSignin)

//         if (isSignin === true){
//             setMessage('Hello welcome to sign in page')
//         }
//         else{
//             setMessage('Please Sign in first')
//         }
//     }
//     return(
//         <>
//             <h1>SignIn and SignUp</h1>
//             <p>{message}</p>
//             <button onClick={check}>{isSignin ? 'SignIn':'SignOut'}</button>
//         </>
//     )
// }
// export default SignIn;

import React,{useState} from "react";

function SignIn()
{
    const [isSignIn, setSignin] = useState(false);
    const [message, setMessage] = useState('')

    const check=()=>{
        setSignin(!isSignIn)

        if(isSignIn === true){
            setMessage("Hello welcome to home page")
        }
        else{
            setMessage('Sign in first')
        }
    }

    return(
        <>
        <p>{message}</p>
        <button onClick={check}>{isSignIn ? "SignIn" : "SignOut"}</button>
        </>
    )
}

export default SignIn;