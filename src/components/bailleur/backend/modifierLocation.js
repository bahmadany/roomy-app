import {React,useState} from 'react';
import database from '../../../firebase'
import bootstrap from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const modifierLocation =()=>{
    /*const [
        nom_bayeur,
        indexLocation,
         ]=props;*/

    const   onModificationLocation = ()=>{
        database.ref('location/nom_bayeur3/0/').update({
            "ID_location":"5",
            "Type" :"type",
            "Nbre_appart":"nbreDeChambre",
            "Prix":"prix",
            "Ville":"ville",
            "Quartier":"quartier",
            "Addresse":"addresse",
            "Meuble":"FALSE",
            "PhotoName":"photoName" })
          .then(function() {
            console.log("update succeeded.")
          })
          .catch(function(error) {
            console.log("update failed: " + error.message)
          }); 
        } 
    return(
        <>
        <button type="submit" className="btn btn-primary text-center" onClick={(event)=>onModificationLocation()}>modifier</button>
        </>
    )
}
export  default modifierLocation;