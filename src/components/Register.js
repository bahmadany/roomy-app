import React, {Component } from "react";
import { NavLink } from "react-router-dom";
import GgLogin from './component_login_register/FbLogin';
import FbLogin from './component_login_register/GgLogin';
import firebase from "./firebase";


export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            mailuser : 'testmailuser',
            password : 'testpass'
        };
    }

    handleregister = () => {
        const dbuserref = firebase.database().ref('users').child('clients/');
        const user = {
            mail : this.state.mailuser,
            password : this.state.password
        };
        dbuserref.push(user);
        console.log("hreree");
    }

    render() {
        return (
            <>
            <h3>Créer mon compte Roomy</h3>
            <p>Déjà inscrit sur Roomy ? <NavLink to="/sign-in">Connectez-vous</NavLink></p>
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
                    <label for="inputName" className="form-label">FirstName</label>
                    <input type="text" className="form-control" id="inputName"/>
                </div>
                <div className="col-md-12">
                    <label for="inputLastName" className="form-label">LastName</label>
                    <input type="text" className="form-control" id="inputLastName"/>
                </div>
                <div className="col-md-12">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-md-12">
                    <label for="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4"/>
                </div>
                <label for="inputState" className="form-label">Type</label>
                <select id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option>Bailleur</option>
                    <option>Client</option>
                </select>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
                        <label className="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" onClick = { (event) => {this.handleregister();}} className="btn btn-primary">Inscrivez-vous</button>
                </div>
      </form>
      </>
        );
    }
}