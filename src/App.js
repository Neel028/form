import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  let[name,setname]=useState('')
    let[pass,setpass]=useState('')
    let[onname,setonname]=useState('')
    let[onpass,setonpass]=useState('')
    let hand=(e)=>{
        e.preventDefault()
        setname(onname)
        setpass(onpass)
    }
  return (
    <div className='app'>
      <div className="box">
        <form onSubmit={hand}>
          <input type="text" placeholder="Email" onChange={(e)=>setonname(e.target.value)}/>
          <input type="password" placeholder="Password" onChange={(e)=>setonpass(e.target.value)}/>
          <button type="submit">Submit</button>
        </form>
      </div>
      <h1>Name : {name}</h1>
      <h1>Password : {pass}</h1>
    </div>
  );
}

export default App;
