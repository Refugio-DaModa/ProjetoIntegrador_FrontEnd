import Categoria from "./Categoria";
import User from "./User";

interface Produto 
{
    id: number;
    descricao: string;
    nome: string;
    foto: string;
    preco: number;
    quantidade: number;
    categoria?:Categoria|null;
    user?:User|null;
}

export default Produto;