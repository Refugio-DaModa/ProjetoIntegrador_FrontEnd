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
            <div className="roxoEscuro">
                <div className="classLogo">
                    <Link to="/home">
                        <img 
                        className="logoFooter" 
                        src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/%C3%8Dcones/Logo%20Ref%C3%BAgio.png?raw=true" 
                        alt="" 
                        />
                    </Link>
                </div>
                
                <div className="sobreNos">
                    <h3>Informações</h3>
                    <Link to="/equipe" style={{textDecoration: 'none', color: '#ffffff'}}>
                        <p>Sobre nós</p>
                    </Link>
                    <p>Contato</p>
                    <p>Política de privacidade</p>
                </div>

                <div className="classPagamento">
                    <h3>
                        Formas de pagamento
                    </h3>
                    <div className="cardsPagamentos">
                        <img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/%C3%8Dcones/Visa.jpg?raw=true" className="pagamento"/>
                        <img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/%C3%8Dcones/Mastercard.jpg?raw=true" className="pagamento"/>
                        <img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/%C3%8Dcones/Boleto.png?raw=true" className="pagamento"/>
                        <img src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/%C3%8Dcones/Paypal.jpg?raw=true" className="pagamento"/>
                    </div>
                </div>

                <div className="classIcones">
                    <h3>Redes sociais</h3>
                    <div className='icons'>
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
                    </div>
                </div>  

            </div>
            
            <div className="copyright">
                <p>Refúgio da Moda | © 2022 Copyright: Todos os direitos reservados.</p>
            </div>

        </>
    )
}

export default Footer;