import React, { Component } from "react";
import { Link } from "react-router-dom"

export default class Account_type extends Component{
    render(){
        return(
            <div className="row">
                <div className="col">
                    <div class="card">
                        <img class="card-img-top" src={require("../../images/User.png")} alt="Card image"/>
                        <div class="card-body">
                            <h4 class="card-title">Bailleur</h4>
                            <p class="card-text">Si vous avez des offres chez nous, c'est par ici .</p>
                            <a href="#" class="btn btn-primary">Suivant</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div class="card">
                        <img class="card-img-top" src={require("../../images/User.png")} alt="Card image"/>
                        <div class="card-body">
                            <h4 class="card-title">Locataire</h4>
                            <p class="card-text">Si vous voulez louer chez nous, c'est par ici .</p>
                            <a href="#" class="btn btn-primary">Suivant</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}