import {React,useState} from 'react';
import database from '../../../firebase'
import bootstrap from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const supprimerLocation =()=>{
    /*const [
        nom_bayeur,
        indexLocation,
         ]=props;*/

    const   onDeleteLocation = ()=>{
        database.ref('location/nom_bayeur2/1').remove()
          .then(function() {
            console.log("Remove succeeded.")
          })
          .catch(function(error) {
            console.log("Remove failed: " + error.message)
          });   
        } 
    return(
        <>
        <button type="submit" className="btn btn-primary text-center" onClick={(event)=>onDeleteLocation()}>Supprimer</button>
        </>
    )
}
export  default supprimerLocation;