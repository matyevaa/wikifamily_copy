import React, {useState, useEffect, Component} from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
// import { render } from '@testing-library/react';

const Login = () => {

  useEffect(() => {
    // checkLogin();
  }, []);

  const checkLogin = async() => {
    const result = await axios ('/login', {
      mode: "no-cors",
      headers: { 'Content-Type': 'application/json'}
    })
    .catch(err => console.log(err));
    console.log(result);
  };

  const facebookLogout = async() => {
    const result = await axios ('/logout', {
      mode: "cors",
      headers: { 'Content-Type': 'application/json'}
    })
    .catch(err => console.log(err));
    console.log(result);
  };

  return (
    <div className="content">
      <button type="button"><a href="http://localhost:3000/facebook/login">Facebook</a></button>
      <button type="button"><a href="http://localhost:3000/google/login">Google</a></button>
      <button type="button" onClick={facebookLogout}>logout</button>
      <button type="button" onClick={checkLogin}>see info</button>
    </div>
  );
}

export default Login;