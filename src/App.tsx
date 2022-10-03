import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sobre from './paginas/sobre/Sobre';

function App() {
  return (
    <BrowserRouter>
        <div style={{minHeight: '100vh'}}>
          <Routes>
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
