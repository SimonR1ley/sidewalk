import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  let navigate = useNavigate();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();


  const getName = (e) => {
    let value = e.target.value;
    setUsername(value);
  }

  const getPassword = (e) => {
    let value = e.target.value;
    setPassword(value);
  }


  const addUser = () => {

    console.log(username + password)

    let payload = {
      "username": username,
      "password": password,
      
    
    }

    Axios.post('http://localhost:5000/api/addUser', payload);

    if(username == '' && password == ''){
      navigate('./signup');
    }else{
      navigate('./login');
    }

   

  }



  return (
    <div>
      <h1 className='log-sign-main-heading'>SIDEWALK</h1>

      <div className='log-sign-con'>
        <h2 className='log-sign-heading'>SIGNUP</h2>
        <input className='name-log-sign-input' placeholder='NAME' onChange={getName}></input>
        <input className='password-log-sign-input' placeholder='PASSWORD' onChange={getPassword}></input>
        <div className='sgn-log-sign-btn '><p className='log-sign-btn-text' onClick={addUser}>SIGNUP</p></div>
        <Link to='/login'><p className='sgn-signup-text'>LOGIN</p></Link>
      </div>
    </div>
  )
}

export default SignUp;