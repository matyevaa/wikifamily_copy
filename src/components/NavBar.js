import React from 'react';
// import logo from '/public/logo192.png';

const Navbar = ({
}) => {
  return(  
    <div className="nav">
        <div className="imageContainer">
          <img className="logo"  src={'/public/logo192.png'} alt ="WikiFamily logo"/>
        </div>
        <div className="navbar">
            <ul className="nav_list">
            <li id="nav_item" className="active"><a href="/">Home</a></li>
            <li id="nav_item"><a href="/help">Help</a></li>
            <li id="nav_item"><a href="/about">About</a></li>
            </ul>
        </div>

        <div className="accountContainer">
       {/* <div className="accountContainer" role="group" aria-label="account options"></div> 
       bootstrap has a group button option "button group"  */}
            <button type="button" className="loginStat">Login</button>
            <button type="button" className="loginStat">Sign Up</button>
             {/* if the buttons are going to be rounded, should we round the information bg (transparent)  */}
      </div>
    </div>
  );
}

export default Navbar;
