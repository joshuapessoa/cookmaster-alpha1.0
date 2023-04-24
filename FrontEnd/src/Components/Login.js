import React, { useState,useEffect } from 'react';
import firebase from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import axios from "axios"


 function Login (props ){
  const[email,setEmail] = useState()
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    if (sessionStorage.getItem('user')) {
       window.location.href = '/Home'
       console.log('user id', sessionStorage.getItem('user'))
    }
}, [])

  const handleLogin = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
        sessionStorage.setItem('user', `${result.user.email}`)
        axios.post('firebase/user', {email: result.user.email}).then((res) => {
            console.log(res.data)
        })
        window.location.href = '/Home'
    }).catch((error) => {
        console.log(error)
    });
  }


  

  return (
    <div>
        <button onClick={handleLogin}>Log in</button>
    </div>
  );
}

export default Login;