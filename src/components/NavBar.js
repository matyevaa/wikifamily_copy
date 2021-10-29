import React from 'react';


const Navbar = ({
}) => {
  return(
    <div>
      <img class="logo" />
        <ul class="nav_list">
          <li id="nav_item" class="active"><a href="/">Home</a></li>
          <li id="nav_item"><a href="/help">Help</a></li>
          <li id="nav_item"><a href="/about">About</a></li>
        </ul>
      </div>
  );
}

export default Navbar;
