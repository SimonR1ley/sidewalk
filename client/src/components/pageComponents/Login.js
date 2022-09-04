import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

const Login = () => {


  let navigate = useNavigate();

  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  });


  // let userData = {};

  const userNameVal = (e) => {
    const value = e.target.value
    setInputs({ ...inputs, username: value });
    // Here you will validate 
  }

  const passwordVal = (e) => {
    const value = e.target.value
    setInputs({ ...inputs, password: value });
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputs);


    Axios.get('http://localhost:5000/api/allUsers')
      .then(function (res) {
        let userData = res.data;

        userData.forEach((val) => {

          if (val.username == inputs.username && val.password == inputs.password) {
            sessionStorage.setItem('activeUser', inputs.username);
            console.log("YES");
            navigate('/checkout');
          }
          else {
            console.log('Get Fucked');
          }

        });
      });

  }



  return (
    <div>
      <h1 className='log-sign-main-heading'>SIDEWALK</h1>

      <div className='log-sign-con'>
        <h2 className='log-sign-heading'>LOGIN</h2>
        <input className='name-log-sign-input' placeholder='NAME' onChange={userNameVal}></input>
        <input className='password-log-sign-input' placeholder='PASSWORD' onChange={passwordVal}></input>
        <div className='log-sign-btn'><p className='log-sign-btn-text' onClick={handleSubmit}>LOGIN</p></div>
        <Link to='/signup'><p className='signup-text'>SIGNUP</p></Link>
      </div>

    </div>
  )
}

export default Login;
