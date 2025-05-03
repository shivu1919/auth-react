import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/Signup.css'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase';

function Signup() {
 
  const[email, setEmail] = useState('')
  const[password,setPassword] = useState('')
  const navigate = useNavigate()

  const registerUser = ()=>{
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    alert("User registered successfully, now you can login")
    navigate("/")
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    alert("Wrong credentials or User already exists")
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }

  return (
    <>
        <div style={{width:'100vw', height:'100vh',display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center'}}>

            <div className='form'>
              <h1>Signup</h1>
              <input id="inp" type='email' placeholder='enter your email'
              value={email}
              onChange={(event)=>setEmail(event.target.value)}
              />
              <input id="inp" type='password' placeholder='enter your password'
              value={password}
              onChange={(event)=>setPassword(event.target.value)}
              />
              <button id="signup_btn" onClick={registerUser}>Signup</button>

              <Link to="/">Already registered ? Login</Link>
            </div>

        </div>
    </>
  )
}

export default Signup