import React from "react"
import "./Login.css"
import {Box, Grid, Typography, TextField, Button} from "@mui/material"
import {Link} from "react-router-dom"
import { color } from "@mui/system"

function Login()
{
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" xs={6}>
                <Box paddingX={20}>
                    <form>
                    <Box className="sombra">
                        <Typography variant="h4" gutterBottom color="textPrimary" align="center" className="textos1">
                            Login
                        </Typography>
                        <TextField id="usuario" label="Usuário" variant="outlined" name="usuario" margin="normal" fullWidth />
                        <TextField id="senha" label="Senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
                        <Box marginTop={2} textAlign="center">
                            <Link to="/home" className="text-decorator-none">
                                <Button type="submit" variant="contained" color="primary" fullWidth>
                                    Entrar
                                </Button>
                            </Link>
                        </Box>
                            <Typography  gutterBottom color="blue" align="center" className="espaco">
                                Esqueci minha senha
                            </Typography>
                            <Typography  gutterBottom color="textPrimary" align="center" className="ou">
                                --------------------   OU   --------------------
                            </Typography>
                            <Typography variant="h5" gutterBottom color="black" align="center" className="crie">
                                Crie uma conta
                            </Typography>
                            <Link to="" className="text-decorator-none"> {/* colocar o link do direcionamento */}
                                <Button type="submit" variant="contained" color="primary" fullWidth>
                                    Cadastre-se
                                </Button>
                            </Link>
                    </Box>
                    </form>
                </Box>
            </Grid>

            
        </Grid>
    );
}



export default Login;