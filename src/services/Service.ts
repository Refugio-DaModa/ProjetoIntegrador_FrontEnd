import axios from 'axios';


export const api = axios.create({
    baseURL: "https://refugiodamoda.onrender.com/"
})

export const login = async(url: any , dados:any, setDado:any) =>{
    const resposta =await api.post(url, dados)
    setDado(resposta.data.token)
}

export const cadUsuario = async(url: any , dados:any, setDado:any) =>{
    const resposta =await api.post(url, dados)
    setDado(resposta.data)
}