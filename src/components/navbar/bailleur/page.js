import React from "react";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import {Table } from 'react-bootstrap'
import Ajouter from '../bailleur/choiceAdd';

export default class Page extends React.Component {

    render(){
        return(
            <>
                <div className="row">
                    <div className="col-9">
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                            <Tab eventKey="home" title="Appartement">
                                
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                        <th>N°</th>
                                            <th>Informations</th>
                                            <th>Etat</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>lorem ipsum indir portava devinalati</td>
                                            <td>Check</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>lorem ipsum indir portava devinalati</td>
                                            <td>Check</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>lorem ipsum indir portava devinalati</td>
                                            <td>No Check</td>
                                        </tr>
                                    </tbody>
                                </Table>

                            </Tab>
                            <Tab eventKey="profile" title="Chambre">
                            <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>N°</th>
                                            <th>Informations</th>
                                            <th>Etat</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>lorem ipsum indir portava devinalati</td>
                                            <td>Check</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>lorem ipsum indir portava devinalati</td>
                                            <td>Check</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>lorem ipsum indir portava devinalati</td>
                                            <td>No Check</td>
                                        </tr>
                                    </tbody>
                                </Table>

                            </Tab>
                        </Tabs>
                    </div>
                    <div className="col-3 mt-5">
                    <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                           <Ajouter />
                                        </tr>
                                        <tr>
                                            <td><button className="btn btn-primary">Supprimer</button></td>
                                        </tr>
                                        <tr>
                                            <td><button className="btn btn-primary">Modifier</button></td>
                                        </tr>
                                    </tbody>
                                </Table>

                    </div>    
                </div>
            </>
        )
    }
}