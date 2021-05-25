import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import GgLogin from '../registration/component_registration/GgLogin';
import FbLogin from '../registration/component_registration/FbLogin';

export default class Login extends Component {
    render() {
        return (
            <>
            <h3>Se connecter</h3>
            <p>Pas encore Membre de Roomy ? <NavLink to="/sign-up">Inscrivez-vous</NavLink></p>
            <br/>
            <div className="row">
                <div className="col-md-6">
                     <GgLogin />
                    
                </div>
                <div className="col-md-6">
                   <FbLogin />
             </div>
            </div> 
            <hr/>
            <br/>
            <form className="row g-3">
                <div className="col-md-12">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-md-12">
                    <label for="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4"/>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
                        <label className="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Connectez-vous</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </div>
      </form>
      </>
        );
    }
}