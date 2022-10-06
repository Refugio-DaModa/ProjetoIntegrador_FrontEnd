import React, { ChangeEvent, useEffect, useState } from "react"
import "./Login.css"
import {Box, Grid, Typography, TextField, Button} from "@mui/material"
import {Link, useNavigate} from "react-router-dom"
import { color } from "@mui/system"
import useLocalStorage from "react-use-localstorage"
import UsuarioLogin from "../../model/UserLogin"
import { login } from "../../services/Service"

function Login()
{
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage("token");
    
        const [usuarioLogin, setUsuarioLogin] = useState <UsuarioLogin> ({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            data_nascimento: "",
            token: ""
        })
    
        function updateModel(e: ChangeEvent<HTMLInputElement>)
        {
            setUsuarioLogin ({
                ...usuarioLogin,
                [e.target.name]: e.target.value
            })
        }
    
        async function onSubmit(e:ChangeEvent<HTMLFormElement>)
        {
            e.preventDefault();
            try 
            {
                await login(`usuarios/logar`, usuarioLogin, setToken)
                alert("Usuário logado com sucesso!");
            } 
            catch (error)
            {
                alert("Login ou senha inválido!");
            }
        }
    
        useEffect(() => {
            if (token !== "")
            {
            navigate("/home")
            }
        }, [token])

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" style={{color:"#f5f5f5"}}>
            <Grid alignItems="center" xs={6}>
                <Box paddingX={20}>
                    <form>
                    <Box className="sombra" style={{color:"black"}}>
                        <Typography variant="h4" gutterBottom color="textPrimary" align="center" className="textos1">
                            Login
                        </Typography>
                        <TextField id="usuario" label="Usuário" variant="outlined" name="usuario" margin="normal" fullWidth />
                        <TextField id="senha" label="Senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
                        <Box marginTop={2} textAlign="center">
                            <Link to="/home" className="text-decorator-none">
                                <Button type="submit" variant="contained" color="primary" fullWidth>
                                    Entrar
                                </Button>
                            </Link>
                        </Box>
                        <Link to="" className="text-decorator-none">
                            <Typography  gutterBottom color="blue" align="center" className="espaco">
                                Esqueci minha senha
                            </Typography>
                            </Link>
                            <Box display="flex" justifyContent='center' marginTop={2}>
                                    <Typography variant='subtitle1' className="traco" align="center">----------------------------------------</Typography>
                                    <Typography variant='subtitle1' className="textos1" align="center">   OU   </Typography>
                                    <Typography variant='subtitle1' className="traco" align="center">----------------------------------------</Typography>
                            </Box>
                            <Typography variant="h5" gutterBottom color="black" align="center" className="crie">
                                Crie uma conta
                            </Typography>
                            <Link to="/cadastro" className="text-decorator-none">
                                <Button type="submit" variant="contained" color="primary" fullWidth>
                                    Cadastre-se
                                </Button>
                            </Link>
                    </Box>
                    </form>
                </Box>
            </Grid>

            
        </Grid>
    );
}



export default Login;