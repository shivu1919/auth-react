import React from 'react'
import { signOut } from 'firebase/auth';
import {auth} from '../Firebase'
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate()

  const logOutUser = () =>{
    signOut(auth).then(() => {
      navigate("/")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <>
      <h1>Home page</h1>
      <button onClick={logOutUser}>Log out</button>
    </>
  )
}

export default Home