import React, { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
import './home.css'; // import CSS styling
import './App.css'; // import whole app styling
import nowtifyHome from'../pictures/nowtify_home.png'

function Home() {


  // step 1) state variable for login / reg link, set false first
  const [goToLogin, setGoToLogin] = React.useState(false)
  const [goToRegister, setGoToRegister] = React.useState(false)


  // step 3) if state var = true, nav to login / reg
  if (goToLogin) {
    return <Navigate to = "/login"/>;
  }
  if (goToRegister) {
    return <Navigate to = "/register"/>;
  }


  //  step 2) buttons have function call state variable to make it true 
  return (
    <div>
        <div className="container">
            <div className="nowtify-home-image"><img src={nowtifyHome} alt="nowtify-home" /></div>
            <h1 className="nowtify-header">Nowtify</h1>
            <p className="slogan" >Find the perfect playlist for anything.</p>
            <p className="fade">No Nowtify account? Create an account here</p>
            <button onClick = { () => setGoToRegister(true)} className="fade">Register</button>
            <button onClick = { () => setGoToLogin(true)} className="login-button" >Login</button>
        </div>
    </div>
  );
}

export default Home