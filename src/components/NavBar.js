import React from 'react';

/* we may need to make nav bar responsive:
 * depending on the screen size, the nav bar options and login btns turns into
 * hamburger menu (without logo though) */

const Navbar = ({
}) => {
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
          <button type="button" className="accountBtns leftButton">Login</button>
          <button type="button" className="accountBtns rightButton">Sign Up</button>
        </div>
    </div>
  );
}

export default Navbar;
