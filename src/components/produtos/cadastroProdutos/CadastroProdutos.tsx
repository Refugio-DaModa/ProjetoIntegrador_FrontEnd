import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Categoria from '../../../model/Categoria';
import Produto from '../../../model/Produto';
import User from '../../../model/User';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { busca, buscaId, post, put } from '../../../services/Service';
import { Button, Container, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import './CadastroProdutos.css'

function CadastroProdutos() {
    
    let navigate = useNavigate ()
    const[clicou, setClicou] = useState(false)
    const {id} = useParams <{id:string}>()
    const [categorias,setCategorias] = useState <Categoria []> ([])
    const token = useSelector <TokenState,TokenState["tokens"]> (
        (state) => state.tokens
    )
    const userId = useSelector <TokenState,TokenState["id"]> (
        (state) => state.id
    )
    useEffect (()=>{
        if(token=="") {
            toast.error ("Você precisa estar logado para acessar a nossa página",{
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false, 
                theme: "colored",
                progress: undefined,
            })
            navigate("/login")
        }
    },[token])

    const [categoria,setCategoria] = useState <Categoria> (
        {
            id:0,
            tipo:'',
            denuncia: false,
        }
    )

    const [produto,setProduto] = useState <Produto> (
        {
            id:0,
            nome:'',
            descricao:'',
            foto:'',
            preco:0,
            quantidade:0,
            categoria:null,
            user:null
        }
    )

    const [user,setUser] = useState <User> (
        {
            id: +userId,
            nome:'',
            foto:'',
            usuario:'',
            senha:'',
            data_nascimento:''
        }
    )

    useEffect (()=>{
            setProduto({
            ...produto,
            categoria:categoria,
            user:user
            })
    },[categoria])

    useEffect (()=>{
        getCategorias() 
        if(id != undefined){
            findByIdProduto(id)
        }
    },[id])

    async function getCategorias() {
        await busca("/categorias",setCategorias,{
            headers:{
                "Authorization":token
            }
        })
    }

    async function findByIdProduto(id:string) {
        await buscaId(`produtos/${id}`,setProduto,{
            headers:{
                "Authorization":token
            }
        })
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {

        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setClicou(true)
        if (id !== undefined) {
            await put(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Produto atualizado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: "colored",
                progress: undefined
            });
        } else {
           await post(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Produto cadastrado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: "colored",
                progress: undefined
            });
        }
        back()

    }

    function back() {
        navigate('/produtos')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography 
                variant="h3"
                component="h1"
                align="center"
                >
                    Formulário de cadastro produto
                </Typography>
                <TextField 
                    value={produto.nome} 
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} 
                    id="nome" 
                    label="nome" 
                    variant="outlined" 
                    name="nome" 
                    margin="normal" 
                    fullWidth 
                />
                <TextField 
                    value={produto.descricao} 
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} 
                    id="descricao" 
                    label="descricao" 
                    name="descricao" 
                    variant="outlined" 
                    margin="normal" 
                    fullWidth 
                />
                <TextField 
                    value={produto.preco} 
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} 
                    id="preco" 
                    label="preco" 
                    name="preco" 
                    variant="outlined" 
                    margin="normal" 
                    type="number"
                    fullWidth 
                />
                <TextField 
                    value={produto.foto} 
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} 
                    id="foto" 
                    label="foto" 
                    name="foto" 
                    variant="outlined" 
                    margin="normal" 
                    fullWidth 
                />

                <TextField 
                    value={produto.quantidade} 
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} 
                    id="quantidade" 
                    label="quantidade" 
                    name="quantidade" 
                    variant="outlined" 
                    margin="normal" 
                    type="number"
                    fullWidth 
                />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">
                        Categoria 
                    </InputLabel>
                    
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/categorias/${e.target.value}`, setCategoria, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            categorias.map(categoria => (
                                <MenuItem value={categoria.id}>{categoria.tipo}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>
                        Escolha uma categoria para o produto
                    </FormHelperText>
                    <Button 
                        type="submit"  
                        variant="contained" 
                        className='botao-finalizar-produto'
                        disabled={categoria.id===0 || clicou}
                    >
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default CadastroProdutos;