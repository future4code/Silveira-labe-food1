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
    const [orderHistory, setOrderHistory] = useState()


    const getAddress = (setForm) => {
        axios
        .get(`${BASE_URL}/profile/address`, headers)
        .then((res) => {
            console.log(res.data);
            setAddress(res.data);
            setForm({
                neighbourhood:res.data.address.neighbourhood,
                number:res.data.address.number,
                city:res.data.address.city,
                apartament:res.data.address.apartament,
                state:res.data.address.state,
                street:res.data.address.street
            })
            
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const getProfile = (setForm) => {
        axios
        .get(`${BASE_URL}/profile`, headers)
        .then((res)=>{
            console.log(res.data)
            setProfile(res.data.user)
            setForm({
                name: res.data.user.name,
                email: res.data.user.email,
                cpf:res.data.user.cpf,
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const getRestaurants = () => {
        axios
        .get(`${BASE_URL}/restaurants`, headers)
        .then((res)=>{
            setRestaurants(res.data.restaurants)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const getRestaurantDetail = (id) => {
        axios
        .get(`${BASE_URL}/restaurants/${id}`, headers)
        .then((res)=>{
            console.log(res.data.restaurant)
            setRestaurantDetail(res.data.restaurant)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const getOrdersHistory = () =>{
        axios.get(`${BASE_URL}/orders/history`,headers)
        .then((res)=>{
            setOrderHistory(res.data.orders)
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    const states = { address, profile, restaurants, restaurantDetail, orderHistory }
    const setters = { setAddress, setProfile, setRestaurants, setRestaurantDetail, setOrderHistory }
    const requests = { getAddress, getProfile, getRestaurants, getRestaurantDetail,getOrdersHistory }
    const values = { token, headers }

    return (
        <GlobalStateContext.Provider value={{ states, setters, requests, values }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;