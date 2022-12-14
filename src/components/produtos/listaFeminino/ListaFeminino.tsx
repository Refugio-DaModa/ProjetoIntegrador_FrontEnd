import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../model/Produto';
import { busca } from '../../../services/Service'
import { AppBar, Box, Grid, InputBase, Toolbar } from '@mui/material';
import { alpha, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import './ListaFeminino.css';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BounceLoader } from 'react-spinners';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SearchIcon from '@material-ui/icons/Search';


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

const useStyles2 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.black, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(5),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      
      color: 'primary',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '30ch',
        '&:focus': {
          width: '31ch',
        },
      },
    },
  }),
);

export function ListaFeminino(props:any) {

  const [loading, setLoading] = useState(true)
  const classes = useStyles();
  const classes2 = useStyles2();
  const [produto, setProdutos] = useState<Produto[]>([])
  let navigate = useNavigate();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  let filter = props.inputText;

  let handleFilter = (event: any) => {
    let lowerCase = event.target.value.toLowerCase();
    props.setInputText(lowerCase);
    console.log("search bar:" +lowerCase);
    let filter = lowerCase
    console.log("filter: "+filter);
  }

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

    <div className='barra-com-pesquisa'>
      <AppBar position="static">
        <Toolbar className='pesquisa-produtos'>
          <div className={classes2.search}>
            <div className={classes2.searchIcon}>
              <SearchIcon className='color-searchicon' />
            </div>
            <InputBase
              placeholder="Buscar itens femininos" onChange={handleFilter}
              classes={{
                root: classes2.inputRoot,
                input: classes2.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>

    {loading ? 

          <BounceLoader
            className="loading-produtos"
            color="#8806BF"
            loading
            size={80}
            speedMultiplier={1}
          /> 
    
    : 

    <Grid container direction="row" justifyContent="center" alignItems="center" className='grid-equipe'>

      {
        
        produto.filter((produto) => {
          return produto.nome.toLowerCase().includes(filter);
        })
        .map((produto => (


          <Box className='box-produtos'>
            {produto.categoria?.tipo==='Feminino'? <Card className='cards-produtos' variant="outlined" >
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
          <Button type="submit" variant="contained" className='botao-comprar'>
              Comprar
            </Button>

            <Button size="small" color="secondary">
              <AddShoppingCartIcon/>
            </Button>
          </CardActions>
        </Card>
        
      : ''}
          
        </Box>
          
          
        
          
        )))
      }

      </Grid>
    
    }
    
    
      
      
    </>
  )
}
