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

function App() 
{
  return (
    <Provider store = {store}>
    <ToastContainer/>
    <BrowserRouter>
        <Navbar />
          <div style={{ minHeight: '100vh' }}>
            <Routes> 
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<CadastroUsuario />} />
              <Route path="/formularioCategoria/:id" element={<CadastroCategoria />} />
              <Route path="/deleteCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/categorias" element={<ListaCategoria/>} />
            </Routes>
          </div>
        <Footer />
      </BrowserRouter>
      </Provider>

  )
}

export default App;