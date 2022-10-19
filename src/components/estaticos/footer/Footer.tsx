import { Grid } from '@mui/material';
import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.css'
{/*import img1 from '../../../imgs/carto.png'
import img2 from '../../../imgs/paypal.png'
import img3 from '../../../imgs/visa.png'
import img4 from '../../../imgs/mastercard.png'*/}




function Footer() {
    return (
        <>
            
            <Grid container justifyContent='space-evenly'>
                <Grid item xs={4} display='flex' flexDirection='column' alignItems='center' style={{backgroundColor: '#0D0013', color: "#ffffff", fontWeight: 700, textDecoration: 'none' }}>
                    

                    <h3>Informações</h3>
                    
                    <p>Sobre nós | Contato | Política de privacidade</p>
            
                    
                </Grid>
                <Grid item xs={4} display='flex' flexDirection='column' alignItems='center' style={{backgroundColor: '#0D0013', color: "#ffffff", fontWeight: 700 }}>
                    <h3>Formas de pagamento</h3>

                    {/*<Grid flexDirection='row' className='icons2'>
                        <img src={img4} className='img'/>
                        <img src={img3} className='img'/>
                        <img src={img2} className='img'/>
                        <img src={img1} className='img'/>
                    </Grid> */}
                </Grid>
                <Grid item xs={4} display='flex' flexDirection='column' alignItems='center' style={{backgroundColor: '#0D0013', color: "#ffffff", fontWeight: 700}}>
                    <h3>Redes sociais</h3>

                    <Grid className='icons'>
                            

                            <a href="https://www.facebook.com/generationbrasil" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon style={{ fontSize: 40, color: "white" }} />
                            </a>
                            
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon style={{ fontSize: 40, color: "white" }} />
                            </a>
                            
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon style={{ fontSize: 40, color: "white" }} />
                            </a>

                            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon style={{ fontSize: 40, color: "white" }}></GitHubIcon>
                            </a>

                    </Grid>

                </Grid>   
            </Grid>
            
            
            
            <Grid container display='flex' justifyContent='center' style={{fontWeight: 600}}>
            Rufúgio da Moda | © 2022 Copyright: Todos os direitos reservados.
            </Grid>

        </>
    )
}

export default Footer;