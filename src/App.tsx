import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./paginas/login/Login"
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() 
{
  return (
  <BrowserRouter>
  {/*<Navbar />*/}

    <div style={{minHeight:"100vh"}}>
      <Routes>
        {/*<Route path="/" element={< } >/ */}
        <Route path="/login" element={<Login />} />
        {/*<Route path="/home" element={<Home />} /> */}
        {/*<Route path="/sobre" element={<Sobre-Nos />} /> */}
        
        
      </Routes>
    </div>

  {/*Footer /> */}
</BrowserRouter>

  )
}

export default App;
