import { Grid } from '@mui/material';
import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.css'
import { Link } from 'react-router-dom';



function Footer() {
    return (
        <>
            <Grid 
            container 
            display='flex' 
            alignItems='center'
            justifyContent='space-evenly'
            width={"100vw"}
            height={"15vw"}
            overflow='hidden'
            style={{backgroundColor: '#15001E'}}
            >
                <Grid 
                item xs={4} 
                display='flex' 
                flexDirection='column' 
                alignItems='center' 
                style={{backgroundColor: '#15001E', color: "#ffffff", fontWeight: 400, textDecoration: 'none', fontSize: "1.2vw", lineHeight: "0.2" }}>
                    <h3>Informações</h3>
                    <Link to="/equipe" style={{textDecoration: 'none', color: '#ffffff'}}>
                        <p>Sobre nós</p>
                    </Link>
                    <p>Contato</p>
                    <p>Política de privacidade</p>
                </Grid>

                <Grid 
                item xs={4} 
                display='flex' 
                flexDirection='column' 
                alignItems='center' 
                style={{backgroundColor: '#15001E', color: "#ffffff", fontWeight: 400, fontSize: "1.2vw"}}
                >
                    <h3>
                        Formas de pagamento
                    </h3>
                    <Grid 
                    display='flex'
                    flexDirection='row'
                    alignItems='center'
                    >
                        <img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/%C3%8Dcones/Visa.jpg?raw=true" className="pagamento"/>
                        <img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/%C3%8Dcones/Mastercard.jpg?raw=true" className="pagamento"/>
                        <img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/%C3%8Dcones/Boleto.png?raw=true" className="pagamento"/>
                        <img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/%C3%8Dcones/Paypal.jpg?raw=true" className="pagamento"/>
                    </Grid>
                </Grid>

                <Grid 
                item xs={4} 
                display='flex' 
                flexDirection='column' 
                alignItems='center' 
                style={{backgroundColor: '#15001E', color: "#ffffff", fontWeight: 400, fontSize: "1.2vw"}}>
                    <h3>Redes sociais</h3>
                    <Grid className='icons'>
                        <a 
                            href="https://www.facebook.com/" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <FacebookIcon 
                            style={{ fontSize: '4vw', color: "white" }} className="icones"/>
                        </a>
                        <a 
                            href="https://www.instagram.com/" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <InstagramIcon 
                            style={{ fontSize: '4vw', color: "white" }} className="icones"/>
                        </a>
                        <a 
                            href="https://www.linkedin.com/" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <LinkedInIcon 
                            style={{ fontSize: '4vw', color: "white" }} className="icones"/>
                        </a>
                        <a 
                            href="https://github.com/Refugio-DaModa" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <GitHubIcon 
                            style={{ fontSize: '4vw', color: "white" }} className="icones"/>
                        </a>
                    </Grid>

                </Grid>   
            </Grid>

            <Grid container 
            display='flex' 
            justifyContent='center' 
            alignItems='center'
            width={"100vw"}
            height={"2.5vw"}    
            overflow='hidden'     
            style={{fontWeight: 500, fontSize: "1.1vw"}}          
            >
                Refúgio da Moda | © 2022 Copyright: Todos os direitos reservados.
            </Grid>

        </>
    )
}

export default Footer;