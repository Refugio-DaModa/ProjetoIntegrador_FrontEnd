import Produto from "./Produto";

interface Categoria
{
    id: number;
    tipo: string;
    denuncia: boolean;
    produto?: Produto | null
}

export default Categoria;