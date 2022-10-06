import React, { ChangeEvent, useEffect, useState } from "react"
import "./CadastroUsuario.css"
import {Box, Grid, Typography, TextField, Button} from "@mui/material"
import {Link, useNavigate} from "react-router-dom"
import { color } from "@mui/system"
import User from '../../models/User'
import { cadUsuario } from "../../services/Service"

function CadastroUsuario()
{
    let navigate = useNavigate();
        const [confirmarSenha,setConfirmarSenha] = useState<String>("")
        const [user, setUser] = useState<User>(
            {
                id: 0,
                nome: '',
                usuario: '',
                data_nascimento: '',
                senha: '',
                foto: ''
            })

        const [userResult, setUserResult] = useState<User>(
            {
                id: 0,
                nome: '',
                usuario: '',
                data_nascimento: '',
                senha: '',
                foto: ''
            })

        useEffect(() => {
            if (userResult.id !== 0) {
                navigate("/login")
            }
        }, [userResult])


        function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
            setConfirmarSenha(e.target.value)
        }

        function updatedModel(e: ChangeEvent<HTMLInputElement>) {

            setUser({
                ...user,
                [e.target.name]: e.target.value
            })
    
        }
        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
            if(confirmarSenha == user.senha){
            cadUsuario(`/usuarios/cadastrar`, user, setUserResult)
            alert('Usuario cadastrado com sucesso')
            }else{
                alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
            }
        }

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" style={{color:"#f5f5f5"}}>
            <Grid alignItems="center" xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                    <Box className="sombra" style={{color:"black"}}>
                        <Typography variant="h4" gutterBottom color="textPrimary" align="center" className="textos1">
                            Cadastro
                        </Typography>
                            <TextField required value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome Completo' variant='outlined' name='nome' margin='normal' fullWidth />
                            <TextField required value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                            <TextField value={user.data_nascimento} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='data' label='Data de Nascimento' variant='outlined' name='data' margin='normal' fullWidth />
                            <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto' label='Foto (url)' variant='outlined' name='foto' margin='normal' fullWidth />
                            <TextField required value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                            <TextField required value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign="center">
                            <Link to="/home" className="text-decorator-none">
                                <Button type="submit" variant="contained" color="primary" className="botao">
                                    Cadastrar
                                </Button>
                            </Link>
                            <Link to="/login" className="text-decorator-none">
                                <Button type="submit" variant="contained" color="primary" >
                                    Já possuo conta.
                                </Button>
                            </Link>
                
                        </Box>
                    </Box>
                    </form>
                </Box>
            </Grid>

            
        </Grid>
    );
}



export default CadastroUsuario;