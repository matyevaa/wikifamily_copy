import './style/App.css';
/* import pages */
import Homepage from './pages/Homepage.js';
import Create from './pages/Create.js';
import Help from './pages/Help.js';
import About from './pages/About.js';
import Navbar from './components/NavBar.js';
import AddPerson from './components/AddPerson.js';
import EditPerson from './components/EditPerson.js';
import FamilyTree from './components/FamilyTree.js'; 
import React, { useState } from 'react'; 

/* special library and its components to perform redirection easily */
import {
  BrowserRouter as Router, // store the components and its routes as an object
  Route, // a statement that holds the specific path of the app and the component's name, renders it once it matches the URL
  Switch, // renders the default components once the app rendered, switches between routes as needed
  Link, // like HREF in HTML but also allows you to redirect to the specific component based on its path
  Redirect,
  useParams,
  useRouteMatch
} from "react-router-dom"; // more about that here: https://www.pluralsight.com/guides/how-to-set-react-router-default-route-redirect-to-home

// try localhost:3000/help to check how it works
// NavBar is here so that it always shows up no matter which page is that

function App() {
  const [treeElements, updateTree] = useState([]) 
  return (
    <div>
      <FamilyTree treeElements={treeElements}/> 
      <Navbar/>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/create" component={Create} />
          <Route path="/help" component={Help} />
          <Route path="/about" component={About} />
          <Route path="/add" component={AddPerson} />
          <Route path="/edit/:id" component={EditPerson} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
