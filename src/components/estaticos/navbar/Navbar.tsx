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

    if(token !== '') {
        navBarComponent = <AppBar position="static">


    <div className="containerNavbar">
    
        <div className="logoNavbar">
            <img 
            src="https://github.com/ManGiaco/BancoDeImagens/blob/main/%C3%8Dcones/porjeto%20refugio%20da%20moda.png?raw=true" 
            alt="" 
            className="imagemLogoNavbar"
            />
        </div>

        <div className="navbarOpcoes">      
                <Link to="">
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
                        Sobre nós
                    </Typography>
                </Link>
                <Link to="">
                    <Typography className="opcoesTexto">
                        Administrador
                    </Typography>
                </Link>
        </div>

        <div className="loginPesquisa">

            <form 
            action="search.php" 
            method="get" 
            className="pesquisa">
                <input 
                type="text" 
                name="search"
                placeholder="Search..." required
                className="caixinhaPesquisa"
                />
                <button 
                type="submit"
                className="botaoPesquisa"
                >
                </button>
            </form>

            <div className="login">

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