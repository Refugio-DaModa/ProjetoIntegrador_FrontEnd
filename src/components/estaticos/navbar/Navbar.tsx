import React from 'react'; 
import { AppBar, Typography} from '@mui/material'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { Link, useNavigate } from 'react-router-dom'; 
import { addToken } from '../../../store/tokens/Actions'; 
import { TokenState } from '../../../store/tokens/tokensReducer'; 
import './Navbar.css'; 
import { toast } from 'react-toastify';

function Navbar() { 

    let history = useNavigate() 
    let dispatch = useDispatch() 
    const token = useSelector<TokenState, TokenState["tokens"]>( 
    (state) => state.tokens 
    ) 

    function goLogout() { 
        dispatch(addToken('')) 
        toast.info("Volte sempre 😉", {
            position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "colored", progress: undefined})
        history("/login") 
        } 

    let navBarComponent 
    
        navBarComponent = <AppBar position="fixed"> 


    <div className="containerNavbar" style={{backgroundColor: '#8806BF'}}>   

        <div className="logoNavbar"> 
            <Link to="/home"> 
                <img  
                src="https://raw.githubusercontent.com/ManGiaco/BancoDeImagens/main/Ref%C3%BAgio%20da%20Moda/%C3%8Dcones/Logo%20reduzido.png"  
                alt=""  
                className="imagemLogoNavbar" 
                /> 
            </Link> 
        </div> 

        <div className="navbarOpcoes">       
                <Link to="/home"> 
                    <Typography className="opcoesTexto"> 
                        Home 
                    </Typography> 
                </Link> 
                <Link to="/produtos/feminino"> 
                    <Typography className="opcoesTexto"> 
                        Feminino 
                    </Typography> 
                </Link> 
                <Link to="/produtos/masculino"> 
                    <Typography className="opcoesTexto"> 
                        Masculino 
                    </Typography> 
                </Link> 
                <Link to="/produtos/infantil"> 
                    <Typography className="opcoesTexto"> 
                        Infantil 
                    </Typography> 
                </Link> 
                <Link to="/equipe"> 
                    <Typography className="opcoesTexto"> 
                        Nossa equipe 
                    </Typography> 
                </Link> 
        </div> 

        <div className="navbarIcones">

            <div className="dropdown">
                <img 
                src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/%C3%8Dcones/Perfil%20branco.png?raw=true" 
                alt=""
                className="iconePerfil"
                />
                <div className="dropdown-content">

                    <Link to="/login">
                        <Typography className="opcoesDropdown"> 
                            Login
                        </Typography> 
                    </Link>
                    <Link to="/categorias">
                        <Typography className="opcoesDropdown"> 
                            Categorias
                        </Typography> 
                    </Link>
                    <Link to="/produtos">
                        <Typography className="opcoesDropdown"> 
                            Produtos
                        </Typography> 
                    </Link>
                    <Link to="/formularioCategoria">
                        <Typography className="opcoesDropdown"> 
                            Nova Categoria
                        </Typography> 
                    </Link>
                    <Link to="/formularioProduto">
                        <Typography className="opcoesDropdown"> 
                            Novo Produto
                        </Typography> 
                    </Link>
                        <Typography onClick={goLogout} className="opcoesDropdown"> 
                            Logout
                        </Typography> 
                </div>
            </div>

        </div>

        <div className="sacola"> 
            <Link to="">  
                <img 
                src="https://raw.githubusercontent.com/ManGiaco/BancoDeImagens/main/Ref%C3%BAgio%20da%20Moda/%C3%8Dcones/Sacola%20branca.png" 
                alt="" 
                className="sacolaImagem"
                />
            </Link> 
        </div>

    </div> 
    </AppBar> 

    return ( 
    <> 
        {navBarComponent} 
    </> 
); 
} 

export default Navbar; 