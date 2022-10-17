import React from "react";
import {Typography, Grid } from '@material-ui/core';
import {Box} from "@mui/material";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Footer.css';


function Footer () {
    return (
                <Grid className="gridFooter">      

                    <Box className='box1'>
                        <Typography className="textosFooter" >
                            Copyright © 2022 Refúgio da Moda
                        </Typography>
                    </Box>

                    <Box className="box2">
                        <Typography className="textosFooter">
                            Siga-nos nas redes sociais: 
                        </Typography>

                        <Box className="redes">
                            <a href="https://www.facebook.com/" target="_blank">
                                <FacebookIcon className="iconesRedes"/>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank">
                                <InstagramIcon className="iconesRedes"/>
                            </a>
                            <a href="https://www.github.com/" target="_blank">
                                <GitHubIcon className="iconesRedes"/>
                            </a>
                        </Box>
                    </Box>

                </Grid> 
    )
}

export default Footer;