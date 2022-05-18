import React, { useEffect, useState } from "react";
import axios from 'axios';
import { BASE_URL } from "../constants/urls";
import { useNavigate } from 'react-router-dom';
import GlobalStateContext from './GlobalStateContext'

const GlobalState = (props) => {
    // const navigate = useNavigate();
    const token = window.localStorage.getItem("token");
    const headers = {
        headers: {
            auth: token
        }
    }

    const [address, setAddress] = useState([]);
    const [profile, setProfile] = useState({});
    const [restaurants, setRestaurants] = useState([]);
    const [restaurantDetail, setRestaurantDetail] = useState([]);
    const [orders, setOrders] = useState([]);
    const [cart, setCart] = useState([])
    const [qtd, setQtd] = useState(0);


    const getAddress = () => {
        axios
            .get(`${BASE_URL}/profile/address`, headers)
            .then((res) => {
                console.log(res.data);
                setAddress(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const getProfile = () => {
        axios
            .get(`${BASE_URL}/profile`, headers)
            .then((res) => {
                console.log(res.data)
                console.log("Fui chamada")
                setProfile(res.data.user)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const getRestaurants = () => {
        axios
            .get(`${BASE_URL}/restaurants`, headers)
            .then((res) => {
                setRestaurants(res.data.restaurants)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const getRestaurantDetail = (id) => {
        axios
            .get(`${BASE_URL}/restaurants/${id}`, headers)
            .then((res) => {
                // console.log(res.data.restaurant)
                setRestaurantDetail(res.data.restaurant)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    // const placeOrder = () => {
    //     const body = {
    //         "products": [{
    //             "id": "",
    //             "quantity": 0
    //         }]
    //     }
    //     axios
    //     .post(`${BASE_URL}/order`, body, headers)
    //     .then((res) => {
    //         console.log(res);
    //             alert("Pedido realizado com sucesso!")
    //     })
    //     .catch((err) => {
    //         if (cart.quantity.length > 0) {
    //             alert("Você já possui um pedido em andamento!")
    //         }
    //         console.log(err)
    //     })
    // }

    const activeOrder = () => {
        axios
            .get(`${BASE_URL}/active-order`, headers)
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const ordersHistory = () => {
        axios
            .get(`${BASE_URL}`, headers)
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const addToCart = (product) => {
        let newItem = { item: { id: product.id, name: product.name, description: product.description, photo: product.photoUrl, price: product.price, quantity: qtd }, restaurantDetail }
        let newArray = [...cart, newItem];
        console.log(newItem)
        setCart(newArray)
    }
    // function addProductCard(id) {
    //    const copyCart = [...cart]

    //    const item = copyCart((product) => product.id === id);

    //    if(!item){
    //        copyCart.push({id: id, quantity: qtd})
    //    }else{
    //        item.quantity = item.quantity + 1
    // }
    //   setCart(copyCart)
    // }

    const onChangeQuantity = (event) => {
        let value = event.target.value
        setQtd(value)
    }

    const states = { address, profile, restaurants, restaurantDetail, cart, orders }
    const setters = { setAddress, setProfile, setRestaurants, setRestaurantDetail, setCart, setOrders }
    const requests = { getAddress, getProfile, getRestaurants, getRestaurantDetail, addToCart, onChangeQuantity }
    const values = { token, headers }

    return (
        <GlobalStateContext.Provider value={{ states, setters, requests, values }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;