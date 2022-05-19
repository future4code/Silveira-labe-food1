import {BASE_URL} from "../constants/urls.js"
import axios from 'axios'

const placeOrder = (id, address, subtotal) => {
    const url = `${BASE_URL}/restaurants/${id}/order`
    const token = window.localStorage.getItem("token");
    const headers = {
        headers: {
            auth: token          
        }
    }
        axios
        .post(url, headers)
        .then((res)=>{
            // alert(`Pedido em Andamento ${address} Subtotal: ${subtotal}`)
            alert("Pedido realizado com sucesso!")
        })
        .catch((err) => {
            console.log(err)
            alert("Você já possui um pedido em andamento!")
        })
    }