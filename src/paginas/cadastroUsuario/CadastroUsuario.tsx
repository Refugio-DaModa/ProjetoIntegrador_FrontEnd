import React, { ChangeEvent, useEffect, useState } from "react"
import "./CadastroUsuario.css"
import {Box, Grid, Typography, TextField, Button} from "@mui/material"
import {Link, useNavigate} from "react-router-dom"
import User from '../../model/User'
import { cadUsuario } from "../../services/Service"
import { toast } from "react-toastify"
import { SyncLoader } from "react-spinners";

function CadastroUsuario()
{
    const [loading, setLoading] = useState(false);

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
            setLoading(true)
            if(confirmarSenha === user.senha){
            cadUsuario(`/usuarios/cadastrar`, user, setUserResult)
            toast.success("Usuário cadastrado com sucesso!", {
                position: "top-right", 
                autoClose: 2000, 
                hideProgressBar: false, 
                closeOnClick: true, 
                pauseOnHover: false, 
                draggable: false, 
                theme: "colored", 
                progress: undefined})
            }
            else
            {
                setLoading(false)
                toast.error("Dados inconsistentes. Favor verificar as informações de cadastro.", {
                    position: "top-right", 
                    autoClose: 2000, 
                    hideProgressBar: false, 
                    closeOnClick: true, 
                    pauseOnHover: false, 
                    draggable: false, 
                    theme: "colored", 
                    progress: undefined})
            }
        }
        useEffect(() => {
            if(user.usuario !== "" && user.senha.length >= 8)  
            {
                setForm(true)
            }
            else 
            {
                setForm(false)
            }
        }, [user])

        const [form, setForm] = useState(false)

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" style={{color:"#f5f5f5"}}>
            <Grid alignItems="center" xs={6}>
                <Box paddingX={15} className="padding">
                    <form onSubmit={onSubmit} >
                    <Box className="sombra" style={{color:"black"}}>
                        <Typography variant="h4" gutterBottom color="textPrimary" align="center" className="textos1">
                            Cadastro
                        </Typography>
                            <TextField required value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome Completo' variant='outlined' name='nome' margin='normal' fullWidth />
                            <TextField required value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                            <TextField value={user.data_nascimento} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='data' label='Data de Nascimento' variant='outlined' name='data_nascimento' type="date" InputLabelProps={{shrink:true}} margin='normal' fullWidth />
                            <TextField required value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto' label='Foto (url)' variant='outlined' name='foto' margin='normal' fullWidth />
                            <TextField required value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                            <TextField required value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign="center" display="flex" justifyContent="center">
                                <Button type="submit" variant="contained" className="botao" disabled={!form}>
                                    Cadastrar
                                </Button>
                                    {loading?(<SyncLoader className="loading-login" size={5} color={'#36D7B7'} loading={loading}/>)
                                    :(<SyncLoader className="loading-login" size={0} color={'#36D7B7'} loading={true}/>)}
                            <Link to="/login" >
                                <Button type="submit" variant="contained" className="botao" >
                                    Já possuo conta
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