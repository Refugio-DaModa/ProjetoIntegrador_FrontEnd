import React, { ChangeEvent, useEffect, useState } from "react"
import "./Login.css"
import {Box, Grid, Typography, TextField, Button} from "@mui/material"
import {Link, useNavigate} from "react-router-dom"
import UsuarioLogin from "../../model/UserLogin"
import { login } from "../../services/Service"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { addId, addToken } from "../../store/tokens/Actions";
import { SyncLoader } from "react-spinners";
import 'react-toastify/dist/ReactToastify.css';

function Login()
{
    const [loading, setLoading] = useState(false);

    let navigate = useNavigate();
    const dispatch = useDispatch()
    const [token, setToken] = useState ("")
    
        const [usuarioLogin, setUsuarioLogin] = useState <UsuarioLogin> ({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            data_nascimento: "",
            token: ""
        })

        const [respUserLogin, setRespUserLogin] = useState<UsuarioLogin>({
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            data_nascimento: "",
            token: '',
        });
    
        function updateModel(e: ChangeEvent<HTMLInputElement>)
        {
            setUsuarioLogin ({
                ...usuarioLogin,
                [e.target.name]: e.target.value
            })
        }

        async function onSubmit(e:ChangeEvent<HTMLFormElement>) {
        
            e.preventDefault(); 
            setLoading(true)
            try {
                await login(`usuarios/logar`, usuarioLogin, setRespUserLogin)
                toast.success("Usuário logado com sucesso!", {
                    position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "colored", progress: undefined})
            } 
            catch (error) 
            {
                setLoading(false)
                toast.error("Login ou senha inválidos!", {
                    position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "colored", progress: undefined})
            }
        }
    
    
        useEffect(() => {
            if (token !== "") 
            {
                dispatch(addToken(token));
                navigate("/home");
            }
        }, [token]);

        useEffect(()=>{
            if(respUserLogin.token !== '')
            {
                dispatch(addToken(respUserLogin.token))
                dispatch(addId(respUserLogin.id.toString()))
                navigate('/home');
            }
        },[respUserLogin.token])

        useEffect(() => {
            if(usuarioLogin.usuario !== "" && usuarioLogin.senha.length >= 8) 
            {
                setForm(true)
            }
            else 
            {
                setForm(false)
            }
        }, [usuarioLogin])

        const [form, setForm] = useState(false)

    return (

        <Grid container direction="row" justifyContent="center" alignItems="center" className="fundo">

            <Grid alignItems="center" xs={6}>
                <Box paddingX={20} className="sombra">
                    <form onSubmit={onSubmit}>
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" className="textos1">
                            Login
                        </Typography>
                        <TextField value={usuarioLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} 
                        id="usuario" label="Usuário" variant="outlined" name="usuario" margin="normal" fullWidth />

                        <TextField value={usuarioLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updateModel(e)} 
                        id="senha" label="Senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />

                        <Box marginTop={2} textAlign="center">
                            <Button type="submit" variant="contained" className="btao" fullWidth disabled={!form}>
                                Entrar
                            </Button>   
                                {loading?(<SyncLoader className="loading-login" size={5} color={'#36D7B7'} loading={loading}/>)
                                :(<SyncLoader className="loading-login" size={0} color={'#36D7B7'} loading={true}/>)}    
                        </Box>
                        <Link to="" className="text-decorator-none">
                            <Typography  gutterBottom color="purple" align="center" className="espaco">
                                Esqueci minha senha
                            </Typography>
                            </Link>
                            <Box display="flex" justifyContent='center' marginTop={2} className="pontilhado">
                                    <hr className="tracoLeft"></hr>
                                    <span>ou</span>
                                    <hr className="tracoRight"></hr>
                            </Box>
                            <Typography variant="h5" gutterBottom color="black" align="center" className="crie">
                                Crie uma conta
                            </Typography>
                            <Link to="/cadastro" className="text-decorator-none">
                                <Button className="btao" type="submit" variant="contained" color="primary" fullWidth>
                                    Cadastre-se
                                </Button>
                            </Link>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}



export default Login;