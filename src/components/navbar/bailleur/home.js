import React from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BsFillPersonFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

import Page from "./page";



export default class Home extends React.Component {
    render(){
        return(
            <>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/home">Home</NavLink>
                        <DropdownButton id="dropdown-basic-button" title = < BsFillPersonFill />>
                            <Dropdown.Item href="/sign-in">Se connecter</Dropdown.Item>
                            <Dropdown.Item href="/sign-up">S'inscrire</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </nav>
                <section className="m-5">
                    <Page />
                </section>
            </>
        )
    }
}
