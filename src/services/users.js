import {BASE_URL} from "../constants/urls.js"
import axios from 'axios'

export const addAddress = (body) =>{
    const Headers={
        headers:{
            auth: localStorage.getItem('token')
        }
    }
    axios.put(`${BASE_URL}/address`,body,Headers)
    .then((resp)=>{
        localStorage.setItem('token', resp.data.token)
        alert("Endereço cadastrado")
        console.log(resp)
    })
    .catch((erro)=>{
        alert(erro.data.message)
    })
}
export const SignUp = (body) =>{

    axios.post(`${BASE_URL}/signup`,body)
    .then((resp)=>{
        localStorage.setItem('token', resp.data.token)
        alert("Usuario criado ")
    })
    .catch((err) =>{
        console.log(err.data.message)
    })
}
export const updateProfile = (body) =>{
    const Headers={
        headers:{
            auth: localStorage.getItem('token')
        }
    }
    axios.put(`${BASE_URL}/profile`,body,Headers)
    .then(()=>{
        alert("Atualização feita")
    })
    .catch((err)=>{
        console.log(err)
    })
}