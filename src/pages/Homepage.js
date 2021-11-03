import React from 'react';

/* Use "const Name" to initialize a function and return HTML code there
 * You can add any other JavaScript functions above the const Homepage
 * Make sure you have import statement on the top and export statement in the bottom.
 * Use this template to create other pages.
*/

const Homepage = ({
}) => {
  return(
    <div className="homeBG">
        {/* need to add bg image, link? */}

        <div className="information">
            <h1 className="subtopic text">How can you create your own family tree?</h1>
            <p className="description text">Description of how to create a family tree</p>     
        </div>
    </div>
  );
}

export default Homepage;
