import React from "react";
import {Typography, Button, Paper, Grid} from "@material-ui/core";
import {Box} from "@mui/material";
import "./Home.css";

function Home(){
    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo">Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Veja nossos produtos!Qualidade aqui meu parceiro</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Qualidade aqui meu parceiro!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className="botao">Ver Produtos</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://wallpapers.com/images/hd/thrasher-and-streetwear-brands-8y8ny43783hjxn06.jpg" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className="produtos">
                </Grid>
            </Grid>
        
        </>
    );

}

export default Home;