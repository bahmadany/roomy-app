import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/registration/Login";
import Register from "./components/registration/Register";
import FormLocation from './components/bailleur/backend/Form';
import Home from './components/navbar/bailleur/home';

function App() {
  return (
  <Router>
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={Register} />
            <Route path="/form" component={FormLocation} />
            <Route path="/home" component={Home} />
          </Switch>
        </div>
  </Router>
  );
}

export default App;