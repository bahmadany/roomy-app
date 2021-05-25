import {React,useState} from 'react';
//import database from '../../../firebase';
import app from '../backend/firebase';
import '../../../../node_modules/firebase/database';
import '../../../../node_modules/firebase/auth'
import '../../../../node_modules/firebase/storage';
import bootstrap from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

    const database = app.database();
    const storage = app.storage();
    const FormLocation = ()=>{
    const [indexLocation,setIndexLocation] = useState(1);
    const [ville,setVille] = useState("")
    const [addresse,setAddresse] = useState("");
    const [quartier,setQuartier] = useState("");
    const [meuble,setMeuble] = useState("false");
    const [prix,setPrix] = useState("");
    const [photos,setPhotos] = useState([]);
    //const [photoURL,setPhotoURL] = useState("");
    const [nbreDeChambre,setNbreDeChambre] = useState("");
    const [photoName,setPhotoName]=useState("");
    const [photoSize,setPhotoSize]=useState("");
    const [photoTMPLOC,setPhotoTMPLOC] = useState("");
    const [photolist,setPhotolist] = useState([]);
    //var photo = [{name:"n",Url:"n"}]
    const uploadPhotos = ()=>{
        const x = document.getElementById("photoState");
        if ('files' in x) {
          if (x.files.length === 0) {
            <span>Select one or more files.";</span>
          } else {
            for (var i = 0; i < x.files.length; i++) {
              var file = x.files[i];
              if ('name' in file) {
                setPhotoName(file.name);
                storage.ref('images/bayeur_3/'+file.name).put(file.name)
                storage.ref('images/bayeur_3/'+ file.name).getDownloadURL()
                .then((url) =>{
                  var name = url.split(RegExp('(%2F)..*(%2F)'))[1]
                  photos.push({name:name,Url:url})})
                  //setPhotolist(photolist)})
                .catch(function(error) {
                  console.log("add failed: " + error.message)
                })
                //console.log(photoName)
                //setPhotos({name:photoName,Url:photoURL}) 
              }
              if ('size' in file) {
                setPhotoSize(file.size);
              }
              if('tmp_name' in file){
                  setPhotoTMPLOC(file.tmp_name);
              }
          }
        }
    }} 
    const   onSaveLocation = ()=>{
      const addData = database.ref('location').child('nom_bayeur3/');
              addData.push({
              "ID_location":1,
              "NbreDeChambre":nbreDeChambre,
              "Prix":prix,
              "Ville":ville,
              "Quartier":quartier,
              "Addresse":addresse,
              "Meuble":meuble,
              "Photolist":photos})
          .then(function() {
              console.log("add succeeded.")
              setIndexLocation(indexLocation + 1);
              })
          .catch(function(error) {
                  console.log("add failed: " + error.message)
                })
          } 
     // onSaveRef.set(Data);
     return (
       <>
        <div border border-primary border-1 rounded mx-5 px-5 py-5>
          <h3>Veuillez remplir le formulaire ci-dessous</h3>
           <form encType = "multipart/form-data" className="htmlFor">
            <p>
            <label className="form-label">Veuillez preciser le Nombre de Chambre </label>
                <input type="number" id="NbreChambreState" min="0" value={nbreDeChambre} className="form-control sm-1" 
                onChange={(event)=>setNbreDeChambre(event.target.value)}></input>
            </p>
            <p>    
            <label className="form-label ">Ville</label>
            <select id="villeState" className="form-select mx-2 form-control" required
            onChange={(event)=>setVille(event.target.value)}>
            <option selected>Choisir...</option>
            <option>Casablanca</option>
            <option>Rabat</option>
            <option>Mohamedia</option>
            <option>Tanger</option>
            <option>Kenitra</option>
            <option>Oujda</option>
            <option>Benil Melal</option>
            <option>Fès</option>
            <option>Marrakech</option>
            <option>Agadir</option>
            <option>Meknès</option>
            <option>Tétouan</option>
            <option>El Jadida</option>
            <option>Salé</option>
            <option>Safi</option>
            <option>Sétat</option>
            <option>Nador</option>
            <option>Al Hoceima</option>
            </select>
            </p>
            <p>
            <label  className="form-label">Quartier</label>
            <input id="quartierState" type="text" required className="form-control"
            placeholder="Al Quods ...."
            onChange={(event)=>setQuartier(event.target.value)}/>
            </p>
            <p>
            <label className="form-label">Addresse</label>
            <input id="addresseState" type="text" className="form-control"
            placeholder="Oujda,Al Quods Rue Nourridine ..." required
            onChange={(event)=>setAddresse(event.target.value)}/>
            </p>
            <div className="form-check">
            <input className="form-check-input" type="checkbox" id="meubleState" 
            onChange={()=>setMeuble("true")} required/>
            <label className="form-check-label" for="gridCheck">
                meublé(es)
            </label>
            </div>
            <label className="form-label">Prix</label>
            <input type="number" step="1" min="0" max="10000" required
            className="form-control " onChange={(event)=>setPrix(event.target.value)}
            id="prixState"/>
            <label className="form-label">Veuillez selectionnser vos Photos</label>
            <input type="file" className="form-select mx-2 <<<<<form-control mb-3" id="photoState" accept="image/*"
            onChange={(event)=>uploadPhotos()} multiple 
            required/>
            <button type="submit" className="btn btn-primary text-center btn-lg" onClick={(event)=>{onSaveLocation();
            event.preventDefault()}}>Ajouter</button>
        </form> 
        </div> 
    </>      
     )
    } 
export  default FormLocation
