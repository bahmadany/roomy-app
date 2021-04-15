import React, { Component } from "react";
import {GoogleLogin} from 'react-google-login';
const clientID = "115501740995-k7p7fq5tuq23ug0oi5kc8c5foe43cdfh.apps.googleusercontent.com";
function GgLogin(){
    const onSuccess =(res)=>{
        console.log('[Login Success] currentUser:',res.profileObj);
    };
    const onFailure = (res)=>{
        console.log('[Login Failed] res:',res);
    };
        return(
            <div>
                <GoogleLogin
                clientId = {clientID} 
                buttonText="Login With Google"
                onSuccess={onSuccess}
                onFailure = {onFailure}
                disabled={false}
                cookiePolicy={'single_host_origin'}
                style={{backgroundheight:'100px'}}
                isSignedIn={true}
                />
            </div>
        )
}
export default GgLogin;