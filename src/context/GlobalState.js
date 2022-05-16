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
    const [profile, setProfile] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [restaurantDetail, setRestaurantDetail] = useState([]);

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
        .then((res)=>{
            console.log(res.data)
            setProfile(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const getRestaurants = () => {
        axios
        .get(`${BASE_URL}/restaurants`, headers)
        .then((res)=>{
            console.log(res.data)
            setRestaurants(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const getRestaurantDetail = (id) => {
        axios
        .get(`${BASE_URL}/restaurants/${id}`, headers)
        .then((res)=>{
            console.log(res.data)
            setRestaurantDetail(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const states = { address, profile, restaurants, restaurantDetail }
    const setters = { setAddress, setProfile, setRestaurants, setRestaurantDetail }
    const requests = { getAddress, getProfile, getRestaurants, getRestaurantDetail }
    const values = { token, headers }

    return (
        <GlobalStateContext.Provider value={{ states, setters, requests, values }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;