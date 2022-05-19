
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { BASE_URL } from "../constants/urls";
import { useNavigate } from 'react-router-dom';
import GlobalStateContext from './GlobalStateContext'
import { Modal, Button } from 'react-bootstrap';

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

    const [orderHistory, setOrderHistory] = useState()



    const getAddress = (setForm) => {
        axios
            .get(`${BASE_URL}/profile/address`, headers)
            .then((res) => {
                console.log(res.data);
                setAddress(res.data);
                setForm({
                    neighbourhood: res.data.address.neighbourhood,
                    number: res.data.address.number,
                    city: res.data.address.city,
                    apartament: res.data.address.apartament,
                    state: res.data.address.state,
                    street: res.data.address.street
                })

            })
            .catch((err) => {
                console.log(err)
            })

    }

    const getProfile = (setForm) => {
        axios

            .get(`${BASE_URL}/profile`, headers)
            .then((res) => {
                console.log(res.data)
                setProfile(res.data.user)
                setForm({
                    name: res.data.user.name,
                    email: res.data.user.email,
                    cpf: res.data.user.cpf,
                })
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

    const addToCart = (product, onHide, setAddButton) => {
        let newItem = {
            item: {
                id: product.id,
                name: product.name,
                description: product.description,
                photo: product.photoUrl,
                price: product.price,
                quantity: Number(qtd)
            }, 
            restaurantDetail
        }
        let newArray = [...cart, newItem];
        setCart(newArray)
        onHide();
        if (newItem.item.quantity > 0) {
            setAddButton(false)
        }
    }

    const removeProduct = (produtos, setRemoveButton) => {
        const product = cart.find((item) => {
            return item.item.id === produtos.id
        })
        if (product){
        if (product.item.quantity <= 1) {
            const newArray = cart.filter((produto) => {
                return produto.item.id !== produtos.id
            })
            setCart(newArray)
            setRemoveButton();
        } else {
            const newArray = cart.map((produto) => {
                if (produto.item.id === produtos.id) {
                    //   const cartAux = {item: {quantity=quantity-1}}
                    const cartAux = { item: { ...produto.item, quantity: produto.item.quantity - 1 } }
                    console.log("cartaux", cartAux)
                    return cartAux;
                }
                return produto
            })
            setCart(newArray)
        }
    }
    }


    const onChangeQuantity = (event) => {
        let value = event.target.value
        setQtd(value)
    }

    const getOrdersHistory = () => {
        axios.get(`${BASE_URL}/orders/history`, headers)
            .then((res) => {
                setOrderHistory(res.data.orders)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    const states = { address, profile, restaurants, restaurantDetail, cart, orders, orderHistory }
    const setters = { setAddress, setProfile, setRestaurants, setRestaurantDetail, setCart, setOrders, setOrderHistory }
    const requests = { getAddress, getProfile, getRestaurants, getRestaurantDetail, addToCart, onChangeQuantity, getOrdersHistory, removeProduct }




    const values = { token, headers }

    return (
        <GlobalStateContext.Provider value={{ states, setters, requests, values }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;