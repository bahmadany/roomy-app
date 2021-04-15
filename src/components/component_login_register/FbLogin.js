import React from 'react';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
}

const componentClicked = () => {
  console.log( "Clicked!" )
}

export default function App() {
  return (
    <div className="fb">
         <FacebookLogin
        appId="1080709572439451"
        autoLoad = {false}
        textButton="login"
        cssClass = "fb"
        //onClick={componentClicked}
        callback={responseFacebook}
        icon="fa-facebook"/>
    </div>
   
    )
}