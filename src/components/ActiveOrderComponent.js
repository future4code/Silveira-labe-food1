import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import GlobalStateContext from "../context/GlobalStateContext"
import Relogio from "../assets/relogio.png"

const CardActive = styled.div`
  border-radius: 10px;
  border: solid 2px #b8b8b8;
  min-height:15vh;
  width: 250px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #E86E5A;
`
const Paragraph = styled.div`
  word-wrap: break-word;
  line-height: 20.0px;
  font-size: 20px;
`
const IMG = styled.img `
left: 0;
height: 40px;
width: 40px;
`

const ActiveOrderComponent = (props) => {
    const { states, setters, values, requests } = useContext(GlobalStateContext)
    const { restaurants, pedidoAtivo } = states;
    const { setRestaurants } = setters;
    const { token, headers } = values;
    const { getRestaurants, activeOrder } = requests;

    return (
        <CardActive>
            <IMG src={Relogio} /> 
            <h4>Pedido em andamento</h4>
            <Paragraph> {pedidoAtivo.restaurantName} </Paragraph>
            <Paragraph><strong>SUBTOTAL:</strong> {pedidoAtivo.totalPrice} </Paragraph>
        </CardActive>
    )
}

export default ActiveOrderComponent; 
