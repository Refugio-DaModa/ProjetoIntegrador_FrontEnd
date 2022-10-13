import Categoria from "./Categoria";
import User from "./User";

interface Produto 
{
    id: number;
    descricao: string;
    nome: string;
    foto: string;
    //Ver se a gente muda esse "number" do preço ou não:
    preco: number;
    quantidade: number;
    categoria?:Categoria|null;
    user?:User|null;
}

export default Produto;