import React from "react";
import { useState } from "react";
import "./App.css";



function App(){
  const [password, setPassword] = useState('')

  function generatepassword(){

   const pass = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);

   setPassword(pass);

   navigator.clipboard.writeText(pass);

  }
  return (

    <div className="wrapper">

    <div className="password">{password}</div>

    <button className="button" onClick={generatepassword}>Generate Password</button>

    </div>

    )
}

export default App