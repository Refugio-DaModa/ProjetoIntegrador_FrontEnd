import { SwapVerticalCircleOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Categoria from "../../../model/Categoria";
import { buscaId, post, put } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";
import "./CadastroCategoria.css";
import { ClipLoader } from 'react-spinners';

function CadastroCategoria() {

  const[clicou, setClicou] = useState(false)
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    tipo: "",
    denuncia: false,
    produto: null,
  });

  useEffect(() => {
    if (token === "") {
      toast.error("Ops! Parece que você não está logado", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    buscaId(`/categorias/${id}`, setCategoria, {
      headers: { Authorization: token },
    });
  }

  function updateTema(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
      denuncia: checked,
      produto: null,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    setClicou(true)
    e.preventDefault();
    if (id !== undefined) {
      await put(`/categorias`, categoria, setCategoria, {
        headers: { Authorization: token },
      });
      toast.success("Categoria atualizada com sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    } else {
      await post(`/categorias`, categoria, setCategoria, {
        headers: { Authorization: token },
      });
      toast.success("Categoria cadastrada com sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    }
    back();
  }

  function back() {
    navigate("/categorias");
  }

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setCategoria({
      ...categoria,
      denuncia: checked,
    });
    console.log(checked);
  }, [checked]);

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography
          variant="h3"
          color="textSecondasry"
          component="h1"
          align="center"
          className="margin-denuncia"
        >
          Formulário de cadastro de Categoria
        </Typography>
        <TextField
          value={categoria.tipo}
          className="margin-textfield"
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateTema(e)}
          id="tipo"
          label="Tipo"
          variant="outlined"
          name="tipo"
          margin="normal"
          fullWidth
        />
        <label className="denuncia-margin">Denúncia</label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <Box>
          <Button
            type="submit"
            variant="contained"
            className="botao-finalizar-categoria"
            disabled={clicou}
          >
            Finalizar
            {clicou?<ClipLoader color="#4f5150" size={20} className='espacoloader' /> :''}
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default CadastroCategoria;
