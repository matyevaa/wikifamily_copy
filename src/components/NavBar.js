import React from 'react';

const Navbar = ({
}) => {
  return(
    <div className="nav">
        <div className="imageContainer">
          <img className="logo"  src="/logo192_70x70.png" alt="wikiFamily Logo" />
        </div>

        {/* add div and css so pages and accContainer dont overlap in resize screen */}

        <div className="navbar">
            <ul className="nav_list">
            <li id="nav_item" className="active"><a href="/">Home</a></li>
            <li id="nav_item"><a href="/help">Help</a></li>
            <li id="nav_item"><a href="/about">About</a></li>
            </ul>
        </div>

        <div className="accountContainer">
            <button type="button" className="loginStat leftButton">Login</button>
            <button type="button" className="loginStat rightButton">Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
