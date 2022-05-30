import { BASE_URL } from "../constants/urls.js"
import axios from 'axios'
import GlobalStateContext from '../context/GlobalStateContext'
import { useContext } from "react"


export const placeOrder = (restaurant, body, subtotal, clearCart) => {

    const url = `${BASE_URL}/restaurants/${restaurant.id}/order`
    const token = window.localStorage.getItem("token");
    const headers = {
        headers: {
            auth: token
        }
    }
    axios
        .post(url, body, headers)
        .then((res) => {
            alert(`Pedido em Andamento: ${restaurant.name} Subtotal: ${subtotal}`)
            clearCart();
        })
        .catch((err) => {
            console.log(err)
            alert(err.response.data.message)
        })

        
}
