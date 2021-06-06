import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Account_type from "./components/Account_type/Account_type";
function App() {
  return (
  <Router>
        <div className="auth-inner">
          <Switch>
            <Route exact path='/'       component={Login}         />
            <Route path="/sign-in"      component={Login}         />
            <Route path="/sign-up"      component={Register}      />
            <Route path="/account-type" component={Account_type}  />
          </Switch>
        </div>
  </Router>
  );
}

export default App;