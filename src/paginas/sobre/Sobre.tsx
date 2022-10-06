import { Typography, Button } from '@material-ui/core';
import { Box, Grid, TextField } from '@mui/material';
import React from 'react';
import './Sobre.css';

function Sobre() {
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={6} alignItems="center" justifyContent="center">
          <Box paddingX={20} paddingY={5}>
              <Typography className='titulo' variant="h4" align='center'>Sobre o Refúgio da Moda</Typography>
            
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

        <Grid item xs={6} className="bg-sobre">   
        <Box paddingX={20} paddingY={5}>
              <Typography className='titulo' variant="h4" align='center'>Missão</Typography>
            
              <Box display='flex' justifyContent='center' marginTop={2}>
              </Box>

            <Box display="flex" textAlign="justify" marginTop={2} >
            <Box marginRight={1}>
              <Typography variant='subtitle1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Typography>
            </Box>
            </Box>
          </Box>
        
        
        </Grid>
      </Grid>

      
    </>
  );
}

export default Sobre;