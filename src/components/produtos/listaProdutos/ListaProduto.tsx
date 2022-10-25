import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../model/Produto';
import { busca } from '../../../services/Service'
import { AppBar, Box, Grid, InputBase, Toolbar } from '@mui/material';
import './ListaProduto.css';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import { createStyles, alpha, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { BounceLoader } from 'react-spinners';
import SearchIcon from '@material-ui/icons/Search';


const useStyles2 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      color:'#FFFFFF'
      
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
      display: 'center',
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
      color:'black'
    },
    inputRoot: {
      
      color: '#000000',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
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

function ListaProduto(props: any) {

  const [loading, setLoading] = useState(true)
  const classes = useStyles();
  const classes2 = useStyles2();
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

  let filter = props.inputText;
  

  let handleFilter = (event: any) => {
    let lowerCase = event.target.value.toLowerCase();
    props.setInputText(lowerCase);
    console.log("lowercase:" +lowerCase);
    let filter = lowerCase
    console.log("filter: "+filter);
    
    
  }

  return (
    <>

            <div className={'barra-com-pesquisa'}>
              <AppBar position="static" className='color-appbar'>
                <Toolbar className='pesquisa-produtos'>
                  <div className={classes2.search}>
                    <div className={classes2.searchIcon}>
                      <SearchIcon className='color-searchicon' />
                    </div>
                    <InputBase
                      placeholder="Buscar por título" onChange={handleFilter}
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
    
    : (

    <Grid container direction="row" justifyContent="center" alignItems="center" className='grid-equipe'>

      { 

      produto.filter((produto)=>{
        return produto.nome.toLowerCase().includes(filter);
      }).map(produto => (
          <Box className='box-produtos'>
            <Card className='cards-produtos' variant="outlined" >
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
                  Categoria: {produto.categoria?.tipo}
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
      )
    }
    
    
      
      
    </>
  )
}

export default ListaProduto;