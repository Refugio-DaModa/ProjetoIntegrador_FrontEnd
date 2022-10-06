interface UsuarioLogin
{
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    data_nascimento: string;
    foto: string;
    token: string | null;
}

export default UsuarioLogin;