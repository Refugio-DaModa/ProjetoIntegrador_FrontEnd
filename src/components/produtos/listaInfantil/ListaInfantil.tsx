import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../model/Produto';
import { busca } from '../../../services/Service'
import { Box, Grid } from '@mui/material';
import './ListaInfantil.css';
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
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


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

export function ListaInfantil() {

  const [loading, setLoading] = useState(true)
  const classes = useStyles();
  const [produto, setProdutos] = useState<Produto[]>([])
  let navigate = useNavigate();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )


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
            {produto.categoria?.tipo==='Infantil'? <Card className='cards-produtos' variant="outlined" >
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
              <Typography gutterBottom variant="h5" component="h2">
                {produto.categoria?.tipo}
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
          <Button size="small" color="primary">
              Comprar
            </Button>

            <Button size="small" color="secondary">
              <AddShoppingCartIcon/>
            </Button>
          </CardActions>
        </Card>
        
      : ''}
          
        </Box>
          
          
        
          
        ))
      }

      </Grid>
    
    }
    
    
      
      
    </>
  )
}
