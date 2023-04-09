import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  let[name,setname]=useState('')
    let[password,setpass]=useState('')
    let[onname,setonname]=useState('')
    let[onpassword,setonpassword]=useState('')
    let hand=(e)=>{
        e.preventDefault()
        setname(onname)
        setpass(onpassword)
    }
  return (
    <div className='app'>
      <div className="box">
        <form onSubmit={hand}>
          <input type="text" placeholder="Email" onChange={(e)=>setonname(e.target.value)}/>
          <input type="password" placeholder="Password" onChange={(e)=>setonpassword(e.target.value)}/>
          <button type="submit">Submit</button>
        </form>
      </div>
      <h1>Name : {name}</h1>
      <h1>Password : {password}</h1>
    </div>
  );
}

export default App;
