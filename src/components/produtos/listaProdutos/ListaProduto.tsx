import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../model/Produto';
import { busca } from '../../../services/Service'
import { Box, Grid } from '@mui/material';
import './ListaProduto.css';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { MoonLoader } from 'react-spinners';


const useStyles = makeStyles({
  root: {
    width: 345,
    display: "inline-block",
    margin: 20,
  },
  media: {
    height: 440,
  },
  
});

function ListaProduto() {

  const [loading, setLoading] = useState(true)
  const classes = useStyles();
  const [produto, setProdutos] = useState<Produto[]>([])
  let navigate = useNavigate();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  useEffect(() => {
    if (token == "") {
      toast.error('Você precisa estar logado',{
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined,
    })
      navigate("/login")

    }
  }, [token])

  async function getProduto() {
    await busca("/produtos", setProdutos, {
      headers: {
        'Authorization': token
      },
      
    })
    setLoading(false)
  }

  useEffect(() => {

    getProduto()

  }, [produto.length])

  return (
    <>

    {loading ? <MoonLoader className='loading-produtos' /> 
    
    : 

    <Grid container direction="row" justifyContent="center" alignItems="center" className='grid-equipe'>

      {
        
        produto.map(produto => (
          <Box className='box-produtos'>
            <Card className={classes.root} variant="outlined" >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={produto.foto}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {produto.nome}
                </Typography>
                <Typography variant="h6" color="textPrimary" component="h4">
                  R$ {produto.preco}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {produto.descricao}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <Link to={`/formularioProduto/${produto.id}`} className="text-decorator-none" >
              <Button size="small" color="primary">
                Atualizar
              </Button>
            </Link>

            <Link to={`/deleteProduto/${produto.id}`} className="text-decorator-none">
              <Button size="small" color="secondary">
                <DeleteIcon />
              </Button>
            </Link>
            </CardActions>
          </Card>
          </Box>
          
        
          
          // <Box m={2} >
          //   <Card variant="outlined" className='card-produtos'>
          //     <CardContent>
          //       <Typography color="textSecondary" gutterBottom>
          //         Postagens
          //       </Typography>
          //       <Typography variant="h5" component="h2">
          //         {produto.nome}
          //       </Typography>
          //       <Typography variant="h5" component="h2">
          //         <img src={produto.foto} alt="" className='foto-produto' />
          //         {produto.foto}
          //       </Typography>
          //       <Typography variant="body2" component="p">
          //         {produto.descricao}
          //       </Typography>
          //       <Typography variant="body2" component="p">
          //         {produto.preco}
          //       </Typography>
          //       <Typography variant="body2" component="p">
          //         {produto.preco}
          //       </Typography>
          //       <Typography variant="body2" component="p">
          //         {produto.categoria?.tipo}
          //       </Typography>
                
          //     </CardContent>
          //     <CardActions>
          //       <Box display="flex" justifyContent="center" mb={1.5}>

          //         <Link to={`/formularioProduto/${produto.id}`} className="text-decorator-none" >
          //           <Box mx={1}>
          //             <Button variant="contained" className="marginLeft" size='small' color="primary" >
          //               atualizar
          //             </Button>
          //           </Box>
          //         </Link>
          //         <Link to={`/deleteProduto/${produto.id}`} className="text-decorator-none">
          //           <Box mx={1}>
          //             <Button variant="contained" size='small' color="secondary">
          //               deletar
          //             </Button>
          //           </Box>
          //         </Link>
          //       </Box>
          //     </CardActions>
          //   </Card>
          // </Box>
        ))
      }

      </Grid>
    
    }
    
    
      
      
    </>
  )
}

export default ListaProduto;