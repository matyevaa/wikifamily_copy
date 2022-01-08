import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import axios from "axios";

// const Login = () => {
//   const [profileData, setProfileData] = useState([]);

//   useEffect(() => {
//     checkLogin();
//   }, []);

//   const checkLogin = async() => {
//     const result = await axios ('/facebook/login', {
//       headers: { 'Content-Type': 'application/json'}
//     })
//     .catch(err => console.log(err));
//     setProfileData(result.data);
//   };
//   console.log("Get Data:", profileData);

//   return (
//     <div ClassName="content">
//       <p>Logged in info</p>
//     </div>
//   );
// }

const Login = () => {
  // useEffect(() => {
  //   fetch('/facebook/login', {
  //     method: 'GET',
  //     mode: 'cors',
  //     headers: { 'Content-Type': 'application/json'}
  //   });
  // }, []);

  useEffect(() => {
    checkLogin();
  }, []);

  //workds
  const checkLogin = async() => {
    const result = await axios ('/login', {
      mode: "no-cors",
      headers: { 'Content-Type': 'application/json'}
    })
    .catch(err => console.log(err));
    console.log(result)
  };

  // const facebookLogin = async() => {
  //   const result = await axios ('http://localhost:3000/facebook/login', {
  //     method: 'GET',
  //     mode: 'cors',
  //     headers: { 'Content-Type': 'application/json'}
  //   })
  //   .catch(err => console.log(err));
  //   console.log(result)
  // };

  const facebookLogin = async() => {
    const result = await axios('/facebook/login', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json'}
        });
    console.log(result)

  };

  //workds
  const facebookLogout = async() => {
    const result = await axios ('/logout', {
      mode: "cors",
    })
    .catch(err => console.log(err));
    console.log(result)
  };

  return (
    <div className="content">
      <button type="button" onClick={facebookLogin}>Facebook</button>
      <button type="button" onClick={facebookLogout}>logout</button>
      <button type="button" onClick={checkLogin}>see info</button>
    </div>
  );
}

export default Login;