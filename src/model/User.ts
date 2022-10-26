import Produto from "./Produto";

interface User 
{
    id: number;
    nome: string;
    usuario: string;
    data_nascimento: string;
    senha: string;
    foto: string;
    produto?: Produto[]
}

export default User;