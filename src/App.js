import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from "./components/Home"
import RestaurantCreate from "./components/RestaurantCreate"
import RestaurantDetails from "./components/RestaurantDetails"
import RestaurantList from "./components/RestaurantList"
import RestaurantSearch from "./components/RestaurantSearch"
import RestaurantUpdate from "./components/RestaurantUpdate"
import Login from "./components/Login"

import Protected from './components/Protected'

import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
      <Router>

        {/* <Route path="/list">  <RestaurantList/> </Route>
        <Route path="/create"> <RestaurantCreate/> </Route>
        <Route path="/search"> <RestaurantSearch/> </Route> */}

        <Route path="/logout"> <Logout/> </Route>

        {/* <Route path="/details"> <RestaurantDetails/> </Route> */}
        {/* <Route path="/update/:id" render={props=>(
            <RestaurantUpdate {...props} />
        )}>
        </Route> */}
        {/* */}
        <Route path="/login" render={props=>(
            <Login {...props} />
        )}>
          </Route>
        {/* */}
        {/* <Route exact path="/"><Home/> </Route> */}

        <Protected exact path="/" component={Home} />
        <Protected exact path="/list" component={RestaurantList} />
        <Protected exact path="/create" component={RestaurantCreate} />
        <Protected exact path="/search" component={RestaurantSearch} />
        <Protected exact path="/details" component={RestaurantDetails} />
        <Protected exact path="/update/:id" component={RestaurantUpdate} />

      </Router>
    </div>
  );
}

export default App;
