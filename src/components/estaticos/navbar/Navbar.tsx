import React from 'react'; 
import { alpha, makeStyles, Theme, createStyles } from '@material-ui/core/styles'; 
import IconButton from '@material-ui/core/IconButton'; 
import { AppBar, Toolbar, Box, Typography, Grid } from '@mui/material'; 
import InputBase from '@material-ui/core/InputBase'; 
import Badge from '@material-ui/core/Badge'; 
import MenuItem from '@material-ui/core/MenuItem'; 
import Menu from '@material-ui/core/Menu'; 
import MenuIcon from '@material-ui/icons/Menu'; 
import SearchIcon from '@material-ui/icons/Search'; 
import AccountCircle from '@material-ui/icons/AccountCircle'; 
import MoreIcon from '@material-ui/icons/MoreVert'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { Link, useNavigate } from 'react-router-dom'; 
import { addToken } from '../../../store/tokens/Actions'; 
import { TokenState } from '../../../store/tokens/tokensReducer'; 
import './Navbar.css'; 

function Navbar() { 

    let history = useNavigate() 
    let dispatch = useDispatch() 
    const token = useSelector<TokenState, TokenState["tokens"]>( 
    (state) => state.tokens 
    ) 

    function goLogout() { 
        dispatch(addToken('')) 
        alert("Usuário deslogado") 
        history("/login") 
        } 

    let navBarComponent 

    if(token == '') { 
        navBarComponent = <AppBar position="static"> 


    <div className="containerNavbar">   

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
                <Link to=""> 
                    <Typography className="opcoesTexto"> 
                        Feminino 
                    </Typography> 
                </Link> 
                <Link to=""> 
                    <Typography className="opcoesTexto"> 
                        Masculino 
                    </Typography> 
                </Link> 
                <Link to=""> 
                    <Typography className="opcoesTexto"> 
                        Infantil 
                    </Typography> 
                </Link> 
                <Link to=""> 
                    <Typography className="opcoesTexto"> 
                        Nossa equipe 
                    </Typography> 
                </Link> 
        </div> 

        <div className="navbarIcones">
            <div className="login"> 
                <img 
                src="https://raw.githubusercontent.com/ManGiaco/BancoDeImagens/main/Ref%C3%BAgio%20da%20Moda/%C3%8Dcones/Perfil%20branco.png" 
                alt="" 
                className="loginImagem"
                />
            </div> 
            <div className="sacola"> 
                <img 
                src="https://raw.githubusercontent.com/ManGiaco/BancoDeImagens/main/Ref%C3%BAgio%20da%20Moda/%C3%8Dcones/Sacola%20branca.png" 
                alt="" 
                className="sacolaImagem"
                />
            </div>
        </div>

    </div> 
    </AppBar> 
} 

    return ( 
    <> 
        {navBarComponent} 
    </> 
    ); 
} 

export default Navbar; 