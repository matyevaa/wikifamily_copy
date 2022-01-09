import React, {useState, useEffect, Component} from 'react';
import axios from "axios";

/* we may need to make nav bar responsive:
 * depending on the screen size, the nav bar options and login btns turns into
 * hamburger menu (without logo though) */

/*
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
  
} */

// export default Navbar;

// class Navbar extends Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {
//       isLoggedIn: false
//     };
//   }

//   handleLoginClick() {
//     console.log("should change to true");
//     this.setState({isLoggedIn: true});
//   }

//   handleLogoutClick() {
//     console.log("should change to true");
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let logStat;

//     // returns the user data (full name ID and email)
//     const userInfo = async() => {
//       const userData = await axios ('/info', {
//         mode: "no-cors",
//         headers: { 'Content-Type': 'application/json'}
//       })
//       .catch(err => console.log(err));

//       console.log("inside userInfo, name: " + userData.data['0']['name'] + " " + userData.data['0']['id'] + " " + userData.data['0']['email']);
//     };

//     const facebookLogout = async() => {
//       const result = await axios ('/logout', {
//         // mode: "cors",
//         headers: { 'Content-Type': 'application/json'}
//       })
//       .catch(err => console.log(err));
//       console.log(result);
//     };

//     const loggedIn = async() => {
//       const result = await axios ('/isLoggedIn', {
//         mode: "cors",
//         headers: { 'Content-Type': 'application/json'}
//       })
//       .catch(err => console.log(err));
//       console.log("isLoggedIn: " + result.data);
//     };

//     const renderAuthButton = () => {
//       loggedIn();
//       console.log(isLoggedIn)
//       if (isLoggedIn == false) {
//         console.log("Was not logged in");
//         return  <button type="button" className="accountBtns leftButton" onClick={this.handleLoginClick}><a href="/login">Login</a></button>;
//       } else {
//         console.log("Was logged in");
//         return <button type="button" className="accountBtns rightButton" onClick={facebookLogout, this.handleLogoutClick}>Logout</button>
//       }
//     }

//     return (
//       <div className="nav">
//         <div className="navLogo">
//           <img className="logo"  src="/logo192_70x70.png" alt="wikiFamily Logo" />
//         </div>
//         <div className="navLinks">
//           <ul className="nav_list">
//             <li id="nav_item" className="active"><a href="/">Home</a></li>
//             <li id="nav_item"><a href="/create">CreateTree</a></li>
//             <li id="nav_item"><a href="/help">Help</a></li>
//             <li id="nav_item"><a href="/about">About</a></li>
//            </ul>
//          </div>

//         <div className="accountContainer">
//         <button type="button" onClick={userInfo}>see info</button>
//           {renderAuthButton()}
//         </div>
//      </div>
//     );
//   }
// }


function Navbar(props) {
  const [dataDB, setData] = useState();

  // returns the user data (full name ID and email)
    const userInfo = async() => {
      const userData = await axios ('/info', {
        mode: "no-cors",
        headers: { 'Content-Type': 'application/json'}
      })
      .catch(err => console.log(err));

      console.log("inside userInfo, name: " + userData.data['0']['name'] + " " + userData.data['0']['id'] + " " + userData.data['0']['email']);
    };

    const facebookLogout = async() => {
      const result = await axios ('/logout', {
        // mode: "cors",
        headers: { 'Content-Type': 'application/json'}
      })
      .catch(err => console.log(err));
      console.log(result);
    };

    const loggedIn = async() => {
      const result = await axios ('/isLoggedIn', {
        mode: "cors",
        headers: { 'Content-Type': 'application/json'}
      })
      .catch(err => console.log(err));
      console.log("isLoggedIn: " + result.data);
      setData(result.data);
      console.log(dataDB);
    };

    const renderAuthButton = () => {
      loggedIn();
      console.log("in renderAuthButton " + dataDB);

      if (dataDB == false) {
        console.log("Was not logged in");
        return  <button type="button" className="accountBtns leftButton"><a href="/login">Login</a></button>;
      } else {
        console.log("Was logged in");
        return <button type="button" className="accountBtns rightButton"  onClick={() => {
          facebookLogout();
          handleLogout();
        }}>Logout</button>
      }
    }

    const handleLogout = () => {
      console.log("before " + dataDB);
      setData(false);
      console.log("after " + dataDB);
    }
  
  return (
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
            <button type="button" onClick={userInfo}>see info</button>
              {renderAuthButton()}
            </div>
         </div>
        );

}

export default Navbar;
