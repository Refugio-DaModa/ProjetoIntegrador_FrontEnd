import { Typography, Button } from '@material-ui/core';
import { Box, CardContent, Grid, TextField } from '@mui/material';
import './Sobre.css';
import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { GitHub } from '@mui/icons-material';
import LinkedIn from '@material-ui/icons/LinkedIn';




const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 150,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);


export function Sobre() {

  const classNamees = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [expandedAlex, setExpandedAlex] = React.useState(false);



  return (
    <>
    <Grid container direction="row" justifyContent="center" alignItems="center" className='margin-grid-equipe'>
    <Box className='box-equipe'>
      <div className="container">
        <div className="card">
          <div className="imgBx">
            <img src="https://i.imgur.com/o0UozoZ.png" />
          </div>
          <div className="contentBx">
            <h2>Alex Katanosaka</h2>
            <div className="size">
              <h3>Desenvolvedor Back-End</h3>
            </div>
            <a href="https://www.linkedin.com/in/alexkatanosaka" target="_blank"> <LinkedIn className = 'linkedin-equipe'/> </a>
            <a href="https://github.com/alexkfreitas" target="_blank"> <GitHub className='github-equipe' /> </a>
          </div>
        </div>
      </div>
      </Box>

      <Box className='box-equipe'>
      <div className="container">
        <div className="card">
          <div className="imgBx">
            <img src="https://i.imgur.com/T4noNcP.png" />
          </div>
          <div className="contentBx">
            <h2>Amanda Giacometti</h2>
            <div className="size">
              <h3>Desenvolvedora Front-End</h3>
            </div>
            <a href="https://www.linkedin.com/in/mangiaco/" target="_blank"> <LinkedIn className = 'linkedin-equipe'/> </a>
            <a href="https://github.com/ManGiaco" target="_blank"> <GitHub className='github-equipe' /> </a>
          </div>
        </div>
      </div>
      </Box>

      <Box className='box-equipe'>
      <div className="container">
        <div className="card">
          <div className="imgBx">
            <img src="https://i.imgur.com/1iDZSdQ.png" />
          </div>
          <div className="contentBx">
            <h2>Bruno Nogueira</h2>
            <div className="size">
              <h3>Quality Assurance</h3>
            </div>
            <a href="https://www.linkedin.com/in/bruno-nogueira-2330131aa/" target="_blank"> <LinkedIn className = 'linkedin-equipe'/> </a>
            <a href="https://github.com/brunodev1" target="_blank"> <GitHub className='github-equipe' /> </a>
          </div>
        </div>
      </div>
      </Box>

      <Box className='box-equipe'>
      <div className="container">
        <div className="card">
          <div className="imgBx">
            <img src="https://i.imgur.com/BbcsZdr.png" />
          </div>
          <div className="contentBx">
            <h2>Gabriela Lopes</h2>
            <div className="size">
              <h3>Desenvolvedora Back-End</h3>
            </div>
            <a href="https://www.linkedin.com/in/gabrielalopesp/" target="_blank"> <LinkedIn className = 'linkedin-equipe'/> </a>
            <a href="https://github.com/gabizzzs" target="_blank"> <GitHub className='github-equipe' /> </a>
          </div>
        </div>
      </div>
      </Box>

      <Box className='box-equipe'>
      <div className="container">
        <div className="card">
          <div className="imgBx">
            <img src="https://i.imgur.com/D5Lq4c1.png" />
          </div>
          <div className="contentBx">
            <h2>Lucas Mendes</h2>
            <div className="size">
              <h3>Desenvolvedor Front-End</h3>
            </div>
            <a href="https://www.linkedin.com/in/lucas-mendes-32135a23a/" target="_blank"> <LinkedIn className = 'linkedin-equipe'/> </a>
            <a href="https://github.com/Lucas-Mendes-dos-S-Mota" target="_blank"> <GitHub className='github-equipe' /> </a>
          </div>
        </div>
      </div>
      </Box>

      <Box className='box-equipe'>
      <div className="container">
        <div className="card">
          <div className="imgBx">
            <img src="https://i.imgur.com/iW9Mra7.png" />
          </div>
          <div className="contentBx">
            <h2>Renan Lira</h2>
            <div className="size">
              <h3>Desenvolvedor Back-End</h3>
            </div>
            <a href="https://www.linkedin.com/in/renan-lira/" target="_blank"> <LinkedIn className = 'linkedin-equipe'/> </a>
            <a href="https://github.com/renanlira96" target="_blank"> <GitHub className='github-equipe' /> </a>
          </div>
        </div>
      </div>
      </Box>

      <Box className='box-equipe'>
      <div className="container">
        <div className="card">
          <div className="imgBx">
            <img src="https://i.imgur.com/hwoCtPT.png" />
          </div>
          <div className="contentBx">
            <h2>Thais Oliveira</h2>
            <div className="size">
              <h3>Desenvolvedora Back-End</h3>
            </div>
            <a href="https://www.linkedin.com/in/tha-oliveira" target="_blank"> <LinkedIn className = 'linkedin-equipe'/> </a>
            <a href="https://github.com/Tha-Oliveira" target="_blank"> <GitHub className='github-equipe' /> </a>
          </div>
        </div>
      </div>
      </Box>


    </Grid>
      




    {/* <Grid container direction="row" justifyContent="center" alignItems="center" style={{color:"#f5f5f5"}}> */}
      
      {/* <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={6} alignItems="center" justifyContent="center">
          <Box paddingX={20} paddingY={5}>
              <Typography classNameName='titulo' variant="h4" align='center'>Sobre o Refúgio da Moda</Typography>
            
              <Box display='flex' justifyContent='center' marginTop={2}>
              </Box>

            <Box display="flex" textAlign="justify" marginTop={2}>
            <Box marginRight={1}>
              <Typography variant='subtitle1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Typography>
            </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6} alignItems="center" >
        <Box paddingX={20} paddingY={5}>
            <img src="https://i.imgur.com/DRARIhi.gif" alt="imagem" />
            
        </Box>
            
        </Grid>
      </Grid>



      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={6} alignItems="center" justifyContent="center">
          <Box paddingX={20} paddingY={5}>
            <img src="https://i.imgur.com/DRARIhi.gif" alt="" />
            
            </Box>
        </Grid>

        <Grid item xs={6} classNameName="bg-sobre">   
        <Box paddingX={20} paddingY={5}>
              <Typography classNameName='titulo' variant="h4" align='center'>Missão</Typography>
            
              <Box display='flex' justifyContent='center' marginTop={2}>
              </Box>

            <Box display="flex" textAlign="justify" marginTop={2} >
            <Box marginRight={1}>
              <Typography variant='subtitle1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Typography>
            </Box>
            </Box>
          </Box>
        
        
        </Grid>
      </Grid> */}



        {/* <Card classNameName={classNamees.root} variant="outlined">
          <CardHeader
          
            action={
              <IconButton aria-label="settings">
                
              </IconButton>
            }
            title="Alex Katanosaka Freitas"
            subheader="Desenvolvedor Back-End"
          />
          <CardMedia
            classNameName={classNamees.media}
            image="https://github.com/alexkfreitas.png"
            title="Alex"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="github">
              <a href="https://github.com/alexkfreitas" target="_blank" classNameName="text-decorator-none"><GitHub classNameName='github'/></a>
            </IconButton>
            <IconButton aria-label="linkedin">
              <a href="https://www.linkedin.com/in/alexkatanosaka"><LinkedIn classNameName='linkedin'/></a>
            </IconButton>
            <IconButton
              classNameName={clsx(classNamees.expand, {
                [classNamees.expandOpen]: expandedAlex,
              })}
              onClick={handleExpandClickAlex}
              aria-expanded={expandedAlex}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expandedAlex} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                again without stirring, until mussels have opened and rice is just tender, 5 to 7
                minutes more. (Discard any mussels that don’t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>

        <Box classNameName='box-equipe'>
        <Card classNameName={classNamees.root} variant="outlined">
          <CardHeader
          
            action={
              <IconButton aria-label="settings">
                
              </IconButton>
            }
            title="Amanda Giacometti"
            subheader="Desenvolvedora Front-End"
          />
          <CardMedia
            classNameName={classNamees.media}
            image="https://github.com/ManGiaco.png"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              classNameName={clsx(classNamees.expand, {
                [classNamees.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                again without stirring, until mussels have opened and rice is just tender, 5 to 7
                minutes more. (Discard any mussels that don’t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        </Box>

        <Box classNameName='box-equipe'>
        <Card classNameName={classNamees.root} variant="outlined">
          <CardHeader
          
            action={
              <IconButton aria-label="settings">
                
              </IconButton>
            }
            title="Bruno Nogueira"
            subheader="Quality Assurance"
          />
          <CardMedia
            classNameName={classNamees.media}
            image="https://github.com/brunodev1.png"
            title="Amanda"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              classNameName={clsx(classNamees.expand, {
                [classNamees.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                again without stirring, until mussels have opened and rice is just tender, 5 to 7
                minutes more. (Discard any mussels that don’t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        </Box>

        <Box classNameName='box-equipe'>
        <Card classNameName={classNamees.root} variant="outlined">
          <CardHeader
          
            action={
              <IconButton aria-label="settings">
                
              </IconButton>
            }
            title="Gabriela Lopes"
            subheader="Desenvolvedora"
          />
          <CardMedia
            classNameName={classNamees.media}
            image="https://github.com/gabizzzs.png"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              classNameName={clsx(classNamees.expand, {
                [classNamees.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                again without stirring, until mussels have opened and rice is just tender, 5 to 7
                minutes more. (Discard any mussels that don’t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        </Box>

        <Box classNameName='box-equipe'>
        <Card classNameName={classNamees.root} variant="outlined">
          <CardHeader
          
            action={
              <IconButton aria-label="settings">
                
              </IconButton>
            }
            title="Lucas Mendes"
            subheader="Desenvolvedor Front-End"
          />
          <CardMedia
            classNameName={classNamees.media}
            image="https://github.com/Lucas-Mendes-dos-S-Mota.png"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              classNameName={clsx(classNamees.expand, {
                [classNamees.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                again without stirring, until mussels have opened and rice is just tender, 5 to 7
                minutes more. (Discard any mussels that don’t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        </Box>

        <Box classNameName='box-equipe'>
        <Card classNameName={classNamees.root} variant="outlined">
          <CardHeader
          
            action={
              <IconButton aria-label="settings">
                
              </IconButton>
            }
            title="Renan Lira"
            subheader="Desenvolvedor"
          />
          <CardMedia
            classNameName={classNamees.media}
            image="https://github.com/renanlira96.png"
            title="Renan"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              classNameName={clsx(classNamees.expand, {
                [classNamees.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                again without stirring, until mussels have opened and rice is just tender, 5 to 7
                minutes more. (Discard any mussels that don’t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        </Box>

        <Box classNameName='box-equipe'>
        <Card classNameName={classNamees.root} variant="outlined">
          <CardHeader
          
            action={
              <IconButton aria-label="settings">
                
              </IconButton>
            }
            title="Thais Oliveira"
            subheader="Desenvolvedora"
          />
          <CardMedia
            classNameName={classNamees.media}
            image="https://github.com/Tha-Oliveira.png"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              classNameName={clsx(classNamees.expand, {
                [classNamees.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                again without stirring, until mussels have opened and rice is just tender, 5 to 7
                minutes more. (Discard any mussels that don’t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
    </Box>

    
    </Grid> */}
      
    </>
  );
}