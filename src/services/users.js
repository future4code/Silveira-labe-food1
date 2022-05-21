import {BASE_URL} from "../constants/urls.js"
import axios from 'axios'
import { goToRegisterPage } from "../router/coordinator.js"
import { useNavigate } from "react-router-dom";

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

export const signUp = (event, body) =>{
    event.preventDefault()
    axios.post(`${BASE_URL}/signup`,body)
    .then((resp)=>{
        console.log(resp.data.token)
        localStorage.setItem('token', resp.data.token)
        alert("Usuario criado!")
    })
    .catch((err) =>{
        console.log(err)
        alert("Erro ao criar usuário!")
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
