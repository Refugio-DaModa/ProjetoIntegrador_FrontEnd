import React from "react";
import logo from "./logo.svg";
import Navbar from "./components/estaticos/navbar/Navbar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/estaticos/footer/Footer";
import Login from "./paginas/login/Login";
import Home from "./paginas/home/Home";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />

      <BrowserRouter>
        <Navbar />
        <div style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<CadastroUsuario />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
