import { Button, Container, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import React, { ChangeEvent, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import Categoria from "../../../model/Categoria"
import { buscaId, post, put } from "../../../services/Service"
import { TokenState } from "../../../store/tokens/tokensReducer"

function CadastroCategoria()
{
let navigate = useNavigate()
const {id} = useParams <{id: string}>()
const token = useSelector<TokenState, TokenState ["tokens"] >(
    (state) => state.tokens
)
const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    tipo: "",
    denuncia: false,
    produto: null
})


useEffect(() => {
    if(token === "")
    {
        toast.error("Ops! Parece que você não está logado", {
            position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "colored", progress: undefined})
        navigate ("/login")
    }
}, [token])

useEffect(() => {
    if(id !== undefined)
    {
        findById(id)
    }
}, [id])

async function findById (id: string) 
{
    buscaId (`/categorias/${id}`, setCategoria, {
        headers: {"Authorization": token}
    })
}

function updateTema (e: ChangeEvent<HTMLInputElement>) 
{
    setCategoria({
        ...categoria, 
        [e.target.name]: e.target.value,
        denuncia: checked, 
        produto: null
    })
}

async function onSubmit(e: ChangeEvent<HTMLFormElement>) 
{
    e.preventDefault()
    if(id !== undefined)
    {
        put(`/categorias`, categoria, setCategoria, {
            headers: {"Authorization": token}
        })
        toast.success("Categoria atualizada com sucesso!", {
            position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "colored", progress: undefined})
    }
    else
    {
        post(`/categorias`, categoria, setCategoria, {
            headers: {"Authorization": token}
        })
        toast.success("Categoria cadastrada com sucesso!", {
            position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "colored", progress: undefined})
    }
    back()
}

function back()
{
    navigate("/categorias")
}

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        
        setCategoria({
            ...categoria,
            denuncia: checked
        })
        console.log(checked);
    },[checked])


    return(
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondasry" component="h1" align="center">Formulário de cadastro de Categoria</Typography>
                <TextField value={categoria.tipo} onChange={(e: ChangeEvent<HTMLInputElement>) => updateTema(e)} id="tipo" label="Tipo" variant="outlined" 
                name="tipo" margin="normal" fullWidth />
                   <label >Denúncia</label>
                   <input 
                        type="checkbox"
                        checked={checked}
                        onChange={e => setChecked(e.target.checked)}
                    />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroCategoria;