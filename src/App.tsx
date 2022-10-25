import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CadastroCategoria from "./components/categorias/cadastroCategoria/CadastroCategoria";
import DeletarCategoria from "./components/categorias/deletarCategoria/DeletarCategoria";
import Footer from "./components/estaticos/footer/Footer";
import Navbar from "./components/estaticos/navbar/Navbar";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import ListaCategoria from "./components/categorias/listaCategoria/ListaCategoria";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import store from "./store/store";
import CadastroProdutos from "./components/produtos/cadastroProdutos/CadastroProdutos";
import ListaProduto from "./components/produtos/listaProdutos/ListaProduto";
import DeletarProdutos from "./components/produtos/deletarProdutos/DeletarProdutos";
import { Sobre } from "./paginas/sobre/Sobre";
import { ListaMasculino } from "./components/produtos/listaMasculino/ListaMasculino";
import { ListaFeminino } from "./components/produtos/listaFeminino/ListaFeminino";
import { ListaInfantil } from "./components/produtos/listaInfantil/ListaInfantil";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  
  return (
    <Provider store = {store}>
    <ToastContainer/>
    <BrowserRouter>
        <Navbar />
          <div style={{ minHeight: '100vw' }}>
            <Routes> 
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<CadastroUsuario />} />
              <Route path="/formularioCategoria" element={<CadastroCategoria />} />
              <Route path="/formularioCategoria/:id" element={<CadastroCategoria />} />
              <Route path="/deleteCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/categorias" element={<ListaCategoria/>} />
              <Route path="/produtos" element={<ListaProduto />} />
              <Route path="/produtos/masculino" element={<ListaMasculino inputText={inputText} /> } />
              <Route path="/produtos/feminino" element={<ListaFeminino /> } />
              <Route path="/produtos/infantil" element={<ListaInfantil /> } />
              <Route path="/deleteProduto/:id" element={<DeletarProdutos />} />
              <Route path="/formularioProduto" element={<CadastroProdutos />} />
              <Route path="/formularioProduto/:id" element={<CadastroProdutos />} />
              <Route path="/equipe" element={<Sobre />} />

            </Routes>
          </div>
        <Footer />
      </BrowserRouter>
      </Provider>

  )
}

export default App;