import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
import Message from './message'


ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/message" component={Message}/>
    </div>
  </Router>),
  document.getElementById('root')
);


