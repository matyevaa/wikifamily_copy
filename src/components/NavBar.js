import React, {useState, useEffect} from 'react';
import axios from "axios";

/* we may need to make nav bar responsive:
 * depending on the screen size, the nav bar options and login btns turns into
 * hamburger menu (without logo though) */

const Navbar = ({
}) => {
  const [userInfo, setUserInfo] = useState(false);

  useEffect(() => {
    checkLoginStat();
  }, []);

  //workds
  const checkLoginStat = async() => {
    const result = await axios ('/login', {
      mode: "no-cors",
      headers: { 'Content-Type': 'application/json'}
    })
    .catch(err => console.log(err));
    console.log(result);

    setUserInfo(result.data);

    console.log(userInfo);
  };

  const facebookLogout = async() => {
    const result = await axios ('/logout', {
      mode: "cors",
      headers: { 'Content-Type': 'application/json'}
    })
    .catch(err => console.log(err));
    console.log(result);
  };

// Add conditional for if logged in see name and sign out option
  return(
    <div className="nav">
        <div className="navLogo">
          <img className="logo"  src="/logo192_70x70.png" alt="wikiFamily Logo" />
        </div>
        <div className="navLinks">
          <ul className="nav_list">
            <li id="nav_item" className="active"><a href="/">Home</a></li>
            <li id="nav_item"><a href="/create">CreateTree</a></li>
            <li id="nav_item"><a href="/help">Help</a></li>
            <li id="nav_item"><a href="/about">About</a></li>
          </ul>
        </div>

        <div className="accountContainer">
            <button type="button" className="accountBtns leftButton"><a href="/login">Login</a></button>
            <button type="button" className="accountBtns rightButton" onClick={facebookLogout}>Logout</button>
          </div>
    </div>
  );
  
}

export default Navbar;
